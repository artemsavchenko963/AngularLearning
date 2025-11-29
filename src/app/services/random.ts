import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Random {
  randomNum: number;
  constructor() {
    this.randomNum = Math.floor(Math. random() * 100);
  }
  getRandomNum() {
    return this.randomNum;
  }
}
