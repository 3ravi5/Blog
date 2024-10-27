import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { login, registration } from '../../store/actions';
import { selectValidationErrors } from '../../store/reducers';
import { selectIsSubmitting } from '../../store/selectors';
import { AuthStateInterface } from '../../types/authState.interface';
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { BackendErrorMessages } from '../../../shared/components/backendErrorMessages/backendErrorMessages.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    CommonModule,
    BackendErrorMessages,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<any>;
  backendErrors$!: Observable<any>;
  data$!: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private store: Store<{ auth: AuthStateInterface }>,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(16),
          Validators.minLength(6),
        ],
      ],
    });
    // this.isSubmitting$ = this.store.select(selectIsSubmitting);
    // this.backendErrors$ = this.store.select(selectValidationErrors);

    //we are using combineLatest, it will have data from all the streams inside it
    this.data$ = combineLatest({
      isSubmitting: this.store.select(selectIsSubmitting),
      backendError: this.store.select(selectValidationErrors),
    });
  }

  onSubmit() {
    console.log('Form submitted', this.form);
    const request: LoginRequestInterface = {
      user: this.form.value,
    };
    this.store.dispatch(login({ request }));
  }
}
