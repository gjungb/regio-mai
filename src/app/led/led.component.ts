import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Led } from '../model/led';

@Component({
  selector: 'pi-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LedComponent {
  @Input('piLed')
  led: Led = {
    index: 0,
    color: 'goldenrod',
  };
}
