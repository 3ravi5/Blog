import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';
import {
  getCurrentUser,
  getCurrentUserError,
  getCurrentUserSuccess,
  login,
  loginError,
  loginSuccess,
  registration,
  registrationError,
  registrationSuccess,
} from './actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { TokenService } from '../../shared/services/token.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

export const registerEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    tokenService = inject(TokenService)
  ) => {
    return actions$.pipe(
      ofType(registration),
      switchMap(({ request }) => {
        return authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            //saving token to local storage and then attach this token to header with every request
            // however it is not a good practice to save token to local storage
            tokenService.set('accessToken', currentUser.token);
            return registrationSuccess({ currentUser });
          }),
          catchError((err: HttpErrorResponse) =>
            of(registrationError({ errors: { err: [err.message] } }))
          )
        );
      })
    );
  },
  {
    functional: true,
  }
);

export const loginEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    tokenService = inject(TokenService)
  ) => {
    return actions$.pipe(
      ofType(login),
      switchMap(({ request }) => {
        return authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            tokenService.set('accessToken', currentUser.token);
            return loginSuccess({ currentUser });
          }),
          catchError((err: HttpErrorResponse) => {
            {
            }
            return of(loginError({ errors: { err: [err.message] } }));
          })
        );
      })
    );
  },
  {
    functional: true,
  }
);

export const getCurrentUserEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    tokenService = inject(TokenService)
  ) => {
    return actions$.pipe(
      ofType(getCurrentUser),
      switchMap(() => {
        const token = tokenService.get('accessToken');
        // if token is removed or cleared... don't make further requests
        if (!token) {
          return of(getCurrentUserError());
        }
        return authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccess({ currentUser });
          }),
          catchError(() => of(getCurrentUserError()))
        );
      })
    );
  },
  {
    functional: true,
  }
);

export const redirectAfterRegisterEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(registrationSuccess),
      tap(() => {
        router.navigateByUrl('/');
      })
    );
  },
  {
    functional: true,
    dispatch: false,
  }
);

export const redirectAfterLoginEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(loginSuccess),
      tap(() => {
        router.navigateByUrl('/');
      })
    );
  },
  {
    functional: true,
    dispatch: false,
  }
);
