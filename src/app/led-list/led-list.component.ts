import { Component, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Led } from '../model/led';
import { LedService } from '../shared/led.service';
import { tap, timer } from 'rxjs';

/**
 * Stateful Component
 */
@Component({
  selector: 'pi-led-list',
  templateUrl: './led-list.component.html',
  styleUrls: ['./led-list.component.scss'],
})
export class LedListComponent implements OnInit {
  #service = inject(LedService);

  leds: Array<Led> = [];

  constructor() {
    timer(2000, 5000)
      .pipe(
        tap((i) => console.log(i)),
        takeUntilDestroyed()
      )
      .subscribe();
  }

  ngOnInit() {
    this.#service
      .readLeds()
      .pipe(tap((x) => console.log(x)))
      .subscribe((value) => (this.leds = value));
  }

  /**
   *
   * @param index
   */
  updateColor(index: number): void {
    // effect
    console.log(index);
  }
}
