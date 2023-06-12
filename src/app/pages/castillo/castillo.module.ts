import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CastilloPageRoutingModule } from './castillo-routing.module';

import { CastilloPage } from './castillo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CastilloPageRoutingModule
  ],
  declarations: [CastilloPage]
})
export class CastilloPageModule {}
