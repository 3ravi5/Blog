import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../types/authState.interface';
import { registration } from './actions';

const initialState: AuthStateInterface = {
  isSubmitting: false,
};

//createFeature gives extra benefit over createReducer as it binds the selector
const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(registration, (state) => ({ ...state, isSubmitting: true }))
  ),
});

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
} = authFeature;
