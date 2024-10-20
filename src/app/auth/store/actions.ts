import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { CurentUserInterface } from '../../shared/types/currentUser.interface';

export const registration = createAction(
  '[Auth] Register',
  props<{ request: RegisterRequestInterface }>()
);

export const registrationSuccess = createAction(
  '[Auth] Register Success',
  props<{ currentUser: CurentUserInterface }>()
);

export const registrationError = createAction('[Auth] Register Error');
