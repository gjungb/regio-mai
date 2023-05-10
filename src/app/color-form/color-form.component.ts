import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, tap } from 'rxjs';

@Component({
  selector: 'pi-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.scss'],
})
export class ColorFormComponent implements OnInit {
  initial = 'black';

  form = new FormGroup({
    color: new FormControl(this.initial, {
      validators: [Validators.required, Validators.minLength(3)],
    }),
  });

  ngOnInit(): void {
    this.form
      .get('color')
      ?.valueChanges.pipe(
        debounceTime(300),
        tap((v) => console.log(v))
      )
      .subscribe();
  }

  updateForm(data: unknown): void {
    // effect
    console.log('update');
  }
}
