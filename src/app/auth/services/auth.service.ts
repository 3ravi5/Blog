import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { map, Observable } from 'rxjs';
import { CurentUserInterface } from '../../shared/types/currentUser.interface';
import { AuthResponseInterface } from '../types/authResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurentUserInterface> {
    const url = 'https://api.realworld.io/api/users';
    // transforming AuthResponseInterface to CurrentUserInterface
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response) => response.user));
  }
}
