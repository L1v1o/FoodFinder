import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservierenPage } from './reservieren.page';

const routes: Routes = [
  {
    path: '',
    component: ReservierenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservierenPageRoutingModule {}
