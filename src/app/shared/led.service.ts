import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Led } from '../model/led';

@Injectable({
  providedIn: 'root',
})
export class LedService {
  #url =
    'https://347eb1836965ec040f474bd7f78d4730.balena-devices.com/api/colors';

  #client = inject(HttpClient);

  /**
   *
   * @returns
   */
  readLeds(): Observable<Array<Led>> {
    const colors$ = this.#client.get<string[]>(this.#url);

    return colors$.pipe(
      catchError(() => of(['black', 'red', 'goldenrod'])),
      map((colors) => {
        return colors.map((color, index) => {
          return {
            color,
            index,
          };
        });
      })
    );
  }
}
