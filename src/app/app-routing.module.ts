import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'ciudad',
    loadChildren: () => import('./pages/ciudad/ciudad.module').then( m => m.CiudadPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'castillo',
    loadChildren: () => import('./pages/castillo/castillo.module').then( m => m.CastilloPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },  {
    path: 'madera',
    loadChildren: () => import('./pages/madera/madera.module').then( m => m.MaderaPageModule)
  },
  {
    path: 'cuartel',
    loadChildren: () => import('./pages/cuartel/cuartel.module').then( m => m.CuartelPageModule)
  },
  {
    path: 'mina',
    loadChildren: () => import('./pages/mina/mina.module').then( m => m.MinaPageModule)
  },
  {
    path: 'barrera',
    loadChildren: () => import('./pages/barrera/barrera.module').then( m => m.BarreraPageModule)
  },
  {
    path: 'almacen',
    loadChildren: () => import('./pages/almacen/almacen.module').then( m => m.AlmacenPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
