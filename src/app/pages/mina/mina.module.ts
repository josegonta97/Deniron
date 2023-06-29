import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinaPageRoutingModule } from './mina-routing.module';

import { MinaPage } from './mina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinaPageRoutingModule
  ],
  declarations: [MinaPage]
})
export class MinaPageModule {}
