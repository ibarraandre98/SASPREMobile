
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
    path: 'alarmas',
    loadChildren: () => import('./pages/alarmas/alarmas.module').then( m => m.AlarmasPageModule)
  },
  {
    path: 'calendario-actividades',
    loadChildren: () => import('./pages/calendario-actividades/calendario-actividades.module').then( m => m.CalendarioActividadesPageModule)
  },
  {
    path: 'costos',
    loadChildren: () => import('./pages/costos/costos.module').then( m => m.CostosPageModule)
  },
  {
    path: 'alarma-detalles',
    loadChildren: () => import('./pages/alarma-detalles/alarma-detalles.module').then( m => m.AlarmaDetallesPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
