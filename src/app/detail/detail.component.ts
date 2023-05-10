import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Led } from '../model/led';
import { LedService } from '../shared/led.service';

@Component({
  selector: 'pi-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  #route = inject(ActivatedRoute);

  #service = inject(LedService);

  led$?: Observable<Led>;

  ngOnInit(): void {
    const index = this.#route.snapshot.paramMap.get('index');

    this.led$ = this.#service.readLed(Number(index));
  }
}
