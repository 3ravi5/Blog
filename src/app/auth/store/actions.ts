import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { BackendErrorInterface } from '../../shared/types/backendError.interface';
import { LoginRequestInterface } from '../types/loginRequest.interface';

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

export const login = createAction(
  '[Auth] Login',
  props<{ request: LoginRequestInterface }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ currentUser: CurrentUserInterface }>()
);

export const loginError = createAction(
  '[Auth] Login Error',
  props<{ errors: BackendErrorInterface }>()
);
