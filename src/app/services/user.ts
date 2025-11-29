import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class User {
  getUsers() {
        return of([
            {
                name: 'Вася',
            },
            {
                name: 'Маша',
            },
            {
                name: 'Катя',
            },
        ]);
    }
}
