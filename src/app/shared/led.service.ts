import { Injectable } from '@angular/core';
import { Led } from '../model/led';

@Injectable({
  providedIn: 'root',
})
export class LedService {
  constructor() {}

  /**
   *
   * @returns
   */
  readLeds(): Array<Led> {
    return [
      {
        index: 0,
        color: 'black',
      },
      {
        index: 1,
        color: 'red',
      },
      {
        index: 2,
        color: 'goldenrod',
      },
    ];
  }
}
