/**
 * Represents a single Led on a Blinkt! led board
 *
 * @see {@link https://shop.pimoroni.com/products/blinkt}
 */
export interface Led {
  /**
   * The 0-based index in a list of leds
   */
  index: number;
  /**
   * The color as a valid CSS string
   */
  color: string;
  /**
   * Optional...
   */
  visible?: boolean;
}
