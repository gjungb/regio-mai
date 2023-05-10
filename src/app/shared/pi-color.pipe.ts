import { Pipe, PipeTransform } from '@angular/core';
import tinycolor from 'tinycolor2';

/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype}
 */
type ColorFormat = Parameters<tinycolor.Instance['toString']>[0];

@Pipe({
  name: 'piColor',
})
export class PiColorPipe implements PipeTransform {
  /**
   *
   * @param color
   * @param format
   * @returns
   */
  transform(color: string, format?: ColorFormat): string {
    return tinycolor(color).toString(format);
  }
}
