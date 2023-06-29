import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarreraPageRoutingModule } from './barrera-routing.module';

import { BarreraPage } from './barrera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarreraPageRoutingModule
  ],
  declarations: [BarreraPage]
})
export class BarreraPageModule {}
