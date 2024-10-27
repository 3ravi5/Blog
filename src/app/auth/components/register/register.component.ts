import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { registration } from '../../store/actions';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { selectIsSubmitting } from '../../store/selectors';
import { AuthStateInterface } from '../../types/authState.interface';
import { combineLatest, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { selectValidationErrors } from '../../store/reducers';
import { BackendErrorMessages } from '../../../shared/components/backendErrorMessages/backendErrorMessages.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    BackendErrorMessages,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
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
      username: ['', Validators.required],
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
    const request: RegisterRequestInterface = {
      user: this.form.value,
    };
    this.store.dispatch(registration({ request }));
  }
}
