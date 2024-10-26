import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  //we will add resuable functions here
  rangeArray(start: number, end: number) {
    return [...Array(end - start).keys()].map((x) => x + 1);
  }
}
