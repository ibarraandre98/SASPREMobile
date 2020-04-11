
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
    path: 'insecticidas',
    loadChildren: () => import('./pages/insecticidas/insecticidas.module').then( m => m.InsecticidasPageModule)
  },
  {
    path: 'historialplagas',
    loadChildren: () => import('./pages/historialplagas/historialplagas.module').then( m => m.HistorialplagasPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
