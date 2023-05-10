import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorFormComponent } from './color-form.component';

describe('ColorFormComponent', () => {
  let component: ColorFormComponent;
  let fixture: ComponentFixture<ColorFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorFormComponent]
    });
    fixture = TestBed.createComponent(ColorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
