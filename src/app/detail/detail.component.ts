import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pi-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  #route = inject(ActivatedRoute);

  ngOnInit(): void {
    const i = this.#route.snapshot.paramMap.get('index');

    console.log(i);
  }
}
