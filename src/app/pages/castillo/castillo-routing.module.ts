import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CastilloPage } from './castillo.page';

const routes: Routes = [
  {
    path: '',
    component: CastilloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CastilloPageRoutingModule {}
