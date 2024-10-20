import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';
import {
  registration,
  registrationError,
  registrationSuccess,
} from './actions';
import { catchError, map, of, switchMap, throwError } from 'rxjs';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { HttpErrorResponse } from '@angular/common/http';

export const registerEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(registration),
      switchMap(({ request }) => {
        return authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            return registrationSuccess({ currentUser });
          }),
          catchError((err) => of(registrationError({ errors: err })))
        );
      })
    );
  },
  {
    functional: true,
  }
);
