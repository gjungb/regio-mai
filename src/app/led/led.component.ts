import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Led } from '../model/led';

/**
 * Representational / Stateless Component
 */
@Component({
  selector: 'pi-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LedComponent {
  /**
   *
   */
  @Input('piLed')
  led: Led = {
    index: 0,
    color: 'goldenrod',
  };

  /**
   *
   */
  @Output()
  ledChange = new EventEmitter<number>();

  /**
   *
   */
  handleClick(ev: MouseEvent): void {
    // effect
    console.log('clicked', ev.clientX);

    this.ledChange.emit(this.led.index);

    // this.led.color = 'red';
  }
}
