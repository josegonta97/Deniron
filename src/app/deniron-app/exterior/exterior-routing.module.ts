import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExteriorPage } from './exterior.page';

const routes: Routes = [
  {
    path: '',
    component: ExteriorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExteriorPageRoutingModule {}
