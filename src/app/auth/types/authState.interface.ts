import { BackendErrorInterface } from '../../shared/types/backendError.interface';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  validationErrors: BackendErrorInterface | null;
  currentUser: CurrentUserInterface | null | undefined;
  isLoading: boolean;
}
