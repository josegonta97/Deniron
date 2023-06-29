import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuartelPage } from './cuartel.page';

const routes: Routes = [
  {
    path: '',
    component: CuartelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuartelPageRoutingModule {}
