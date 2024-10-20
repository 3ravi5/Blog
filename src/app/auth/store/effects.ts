import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';
import {
  registration,
  registrationError,
  registrationSuccess,
} from './actions';
import { catchError, map, of, switchMap, tap, throwError } from 'rxjs';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { TokenService } from '../../shared/services/token.service';
import { Router } from '@angular/router';

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
          catchError((err) => of(registrationError({ errors: err.message })))
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
