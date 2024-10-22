import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../types/authState.interface';
import {
  getCurrentUser,
  getCurrentUserError,
  getCurrentUserSuccess,
  login,
  loginError,
  loginSuccess,
  registration,
  registrationError,
  registrationSuccess,
} from './actions';
import { routerNavigatedAction } from '@ngrx/router-store';

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
    })),
    on(login, (state) => ({
      ...state,
      isSubmitting: true,
      isLoading: true,
      validationErrors: null,
    })),
    on(loginSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      isLoading: false,
      currentUser: action.currentUser,
    })),
    on(loginError, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),
    on(getCurrentUser, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(getCurrentUserSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      currentUser: action.currentUser,
    })),
    on(getCurrentUserError, (state) => ({
      ...state,
      currentUser: null,
    })),
    // this action is dispatched from ngrx/router-store
    on(routerNavigatedAction, (state) => ({
      ...state,
      validationErrors: null,
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
