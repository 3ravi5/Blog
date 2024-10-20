import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { catchError, map, Observable, throwError } from 'rxjs';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { environment } from '../../../environments/environment';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { LoginRequestInterface } from '../types/loginRequest.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  mapToUserInterface(response: AuthResponseInterface): CurrentUserInterface {
    return response.user;
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users';
    // transforming AuthResponseInterface to CurrentUserInterface
    return this.http.post<AuthResponseInterface>(url, data).pipe(
      map(this.mapToUserInterface),
      catchError((err) => throwError(() => new Error(err.message)))
    );
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/login';

    return this.http
      .get<AuthResponseInterface>(url)
      .pipe(map(this.mapToUserInterface));
  }
}
