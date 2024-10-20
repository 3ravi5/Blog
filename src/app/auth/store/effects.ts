import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';
import {
  registration,
  registrationError,
  registrationSuccess,
} from './actions';
import { catchError, map, of, switchMap, throwError } from 'rxjs';
import { CurentUserInterface } from '../../shared/types/currentUser.interface';

export const registerEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(registration),
      switchMap(({ request }) => {
        return authService.register(request).pipe(
          map((currentUser: CurentUserInterface) => {
            return registrationSuccess({ currentUser });
          }),
          catchError(() => of(registrationError()))
        );
      })
    );
  },
  {
    functional: true,
  }
);
