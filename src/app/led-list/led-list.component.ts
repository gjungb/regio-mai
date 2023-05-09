import { Component, inject } from '@angular/core';
import { Led } from '../model/led';
import { LedService } from '../shared/led.service';

@Component({
  selector: 'pi-led-list',
  templateUrl: './led-list.component.html',
  styleUrls: ['./led-list.component.scss'],
})
export class LedListComponent {
  #service = inject(LedService);

  leds: Array<Led> = this.#service.readLeds();
}
