import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuartelPageRoutingModule } from './cuartel-routing.module';

import { CuartelPage } from './cuartel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuartelPageRoutingModule
  ],
  declarations: [CuartelPage]
})
export class CuartelPageModule {}
