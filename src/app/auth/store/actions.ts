import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { BackendErrorInterface } from '../../shared/types/backendError.interface';

export const registration = createAction(
  '[Auth] Register',
  props<{ request: RegisterRequestInterface }>()
);

export const registrationSuccess = createAction(
  '[Auth] Register Success',
  props<{ currentUser: CurrentUserInterface }>()
);

export const registrationError = createAction(
  '[Auth] Register Error',
  props<{ errors: BackendErrorInterface }>()
);
