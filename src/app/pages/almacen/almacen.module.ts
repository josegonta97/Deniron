import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlmacenPageRoutingModule } from './almacen-routing.module';

import { AlmacenPage } from './almacen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlmacenPageRoutingModule
  ],
  declarations: [AlmacenPage]
})
export class AlmacenPageModule {}
