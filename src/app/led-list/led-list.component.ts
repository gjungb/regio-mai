import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map, tap, timer } from 'rxjs';
import { Led } from '../model/led';
import { LedService } from '../shared/led.service';

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

  #dr = inject(DestroyRef);

  leds: Array<Led> = [];

  ngOnInit() {
    this.#service
      .readLeds()
      .pipe(tap((x) => console.log(x)))
      .subscribe((value) => (this.leds = value));

    timer(2000, 5000)
      .pipe(
        map((i) => i + 1),
        tap((i) => console.log(i)),
        takeUntilDestroyed(this.#dr)
      )
      .subscribe();
  }

  /**
   *
   * @param index
   */
  updateColor(index: number): void {
    // effect
    console.log(index);

    this.#service
      .updateLed(index)
      .pipe(
        tap((v) => console.log(v)),
        takeUntilDestroyed(this.#dr)
      )
      .subscribe({
        next: (led) => (this.leds[led.index] = led),
      });
  }
}
