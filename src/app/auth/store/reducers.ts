import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../types/authState.interface';
import {
  registration,
  registrationError,
  registrationSuccess,
} from './actions';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  validationErrors: null,
  currentUser: undefined,
};

//createFeature gives extra benefit over createReducer as it binds the selector
const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(registration, (state) => ({
      ...state,
      isSubmitting: true,
      isLoading: true,
      validationErrors: null,
    })),
    on(registrationSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      isLoading: false,
      currentUser: action.currentUser,
    })),
    on(registrationError, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    }))
  ),
});

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
  selectIsLoading,
  selectCurrentUser,
  selectValidationErrors,
} = authFeature;
