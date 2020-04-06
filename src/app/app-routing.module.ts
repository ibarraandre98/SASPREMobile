
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'administrar-cultivos',
    loadChildren: () => import('./pages/administrar-cultivos/administrar-cultivos.module').then( m => m.AdministrarCultivosPageModule)
  },  {
    path: 'administrar-cosechas',
    loadChildren: () => import('./pages/administrar-cosechas/administrar-cosechas.module').then( m => m.AdministrarCosechasPageModule)
  },
  {
    path: 'administrar-almacen',
    loadChildren: () => import('./pages/administrar-almacen/administrar-almacen.module').then( m => m.AdministrarAlmacenPageModule)
  },
  {
    path: 'administrar-usuarios',
    loadChildren: () => import('./pages/administrar-usuarios/administrar-usuarios.module').then( m => m.AdministrarUsuariosPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
