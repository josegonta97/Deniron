import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarreraPage } from './barrera.page';

const routes: Routes = [
  {
    path: '',
    component: BarreraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarreraPageRoutingModule {}
