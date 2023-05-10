import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LedListComponent } from './led-list/led-list.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'leds',
    pathMatch: 'full',
  },
  {
    path: 'leds',
    children: [
      {
        path: '',
        component: LedListComponent,
      },
      {
        path: ':index',
        component: DetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
