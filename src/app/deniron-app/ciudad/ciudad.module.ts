import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CiudadPageRoutingModule } from './ciudad-routing.module';

import { CiudadPage } from './ciudad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CiudadPageRoutingModule
  ],
  declarations: [CiudadPage]
})
export class CiudadPageModule {}
