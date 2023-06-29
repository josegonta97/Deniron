import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinaPage } from './mina.page';

const routes: Routes = [
  {
    path: '',
    component: MinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinaPageRoutingModule {}
