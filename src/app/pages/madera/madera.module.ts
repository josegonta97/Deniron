import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaderaPageRoutingModule } from './madera-routing.module';

import { MaderaPage } from './madera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaderaPageRoutingModule
  ],
  declarations: [MaderaPage]
})
export class MaderaPageModule {}
