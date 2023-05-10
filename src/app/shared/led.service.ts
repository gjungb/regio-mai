import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import tinycolor from 'tinycolor2';
import { Led } from '../model/led';

@Injectable({
  providedIn: 'root',
})
export class LedService {
  #url =
    'https://347eb1836965ec040f474bd7f78d4730.balena-devices.com/api/colors';

  #client = inject(HttpClient);

  #colors = [
    tinycolor.names.cyan,
    tinycolor.names.magenta,
    tinycolor.names.yellow,
    tinycolor.names.black,
    tinycolor.names.red,
    tinycolor.names.green,
    tinycolor.names.blue,
    tinycolor.names.white,
  ].map((c) => tinycolor(c).toRgbString());

  /**
   *
   * @returns
   */
  readLeds(): Observable<Array<Led>> {
    const colors$ = this.#client.get<string[]>(this.#url);

    return colors$.pipe(
      catchError(() => of(this.#colors)),
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

  /**
   *
   * @param index
   * @returns
   */
  readLed(index: number): Observable<Led> {
    const url = `${this.#url}/${index}`;
    const color$ = this.#client.get(url, { responseType: 'text' });

    return color$.pipe(
      catchError(() => of(this.#colors[index])),
      map((color) => ({ index, color }))
    );
  }
}
