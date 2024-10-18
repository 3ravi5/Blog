import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../types/registerRequest.interface';

export const registration = createAction(
  '[Auth] Register',
  props<{ request: RegisterRequestInterface }>()
);
