import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../types/authState.interface';
import {
  registration,
  registrationError,
  registrationSuccess,
} from './actions';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  haveError: false,
};

//createFeature gives extra benefit over createReducer as it binds the selector
const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(registration, (state) => ({ ...state, isSubmitting: true })),
    on(registrationSuccess, (state) => ({ ...state, isSubmitting: false })),
    on(registrationError, (state) => ({
      ...state,
      isSubmitting: false,
      haveError: true,
    }))
  ),
});

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
} = authFeature;
