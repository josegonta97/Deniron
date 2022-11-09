import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExteriorPageRoutingModule } from './exterior-routing.module';

import { ExteriorPage } from './exterior.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExteriorPageRoutingModule
  ],
  declarations: [ExteriorPage]
})
export class ExteriorPageModule {}
