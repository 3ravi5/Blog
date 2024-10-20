import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { catchError, map, Observable, throwError } from 'rxjs';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { environment } from '../../../environments/environment';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users';
    // transforming AuthResponseInterface to CurrentUserInterface
    return this.http.post<AuthResponseInterface>(url, data).pipe(
      map((response) => response.user),
      catchError((err) => throwError(() => new Error(err.message)))
    );
  }
}
