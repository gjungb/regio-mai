import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LedComponent } from './led/led.component';
import { LedListComponent } from './led-list/led-list.component';
import { ColorFormComponent } from './color-form/color-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { PiColorPipe } from './shared/pi-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LedComponent,
    LedListComponent,
    ColorFormComponent,
    DetailComponent,
    PiColorPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
