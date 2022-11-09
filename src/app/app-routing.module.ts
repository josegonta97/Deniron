import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'exterior',
    loadChildren: () => import('./deniron-app/exterior/exterior.module').then( m => m.ExteriorPageModule)
  },
  {
    path: 'ciudad',
    loadChildren: () => import('./deniron-app/ciudad/ciudad.module').then( m => m.CiudadPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./deniron-app/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'inventario',
    loadChildren: () => import('./deniron-app/inventario/inventario.module').then( m => m.InventarioPageModule)
  },
  {
    path: 'informacion',
    loadChildren: () => import('./deniron-app/informacion/informacion.module').then( m => m.InformacionPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
