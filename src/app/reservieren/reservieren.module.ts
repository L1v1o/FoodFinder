import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservierenPageRoutingModule } from './reservieren-routing.module';

import { ReservierenPage } from './reservieren.page';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservierenPageRoutingModule,
    SharedModule,
  ],
  declarations: [ReservierenPage]
})
export class ReservierenPageModule {}
