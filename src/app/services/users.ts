import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {

  }

  createUser(user: UserService): Observable<UserService> {
    return this.http.post<UserService>('http://localhost:3222/user', user)
  }
}
