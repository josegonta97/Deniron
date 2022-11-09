import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CiudadPage } from './ciudad.page';

const routes: Routes = [
  {
    path: '',
    component: CiudadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CiudadPageRoutingModule {}
