import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { BackendErrorInterface } from '../../shared/types/backendError.interface';
import { LoginRequestInterface } from '../types/loginRequest.interface';

//register
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

//login
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

//get current user
export const getCurrentUser = createAction('[Auth] Get current user');

export const getCurrentUserSuccess = createAction(
  '[Auth] Get Current User Success',
  props<{ currentUser: CurrentUserInterface }>()
);

export const getCurrentUserError = createAction(
  '[Auth] Get Current User Error'
);
