
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
    path: 'fertilizaciones',
    loadChildren: () => import('./pages/fertilizaciones/fertilizaciones.module').then( m => m.FertilizacionesPageModule)
  },
  {
    path: 'fertilizantes',
    loadChildren: () => import('./pages/fertilizantes/fertilizantes.module').then( m => m.FertilizantesPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
