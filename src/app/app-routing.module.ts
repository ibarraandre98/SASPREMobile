
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
  },
  {
    path: 'insecticidas',
    loadChildren: () => import('./pages/insecticidas/insecticidas.module').then( m => m.InsecticidasPageModule)
  },
  {
    path: 'administrar-cultivos',
    loadChildren: () => import('./pages/administrar-cultivos/administrar-cultivos.module').then( m => m.AdministrarCultivosPageModule)
  },
  {
    path: 'administrar-cosechas',
    loadChildren: () => import('./pages/administrar-cosechas/administrar-cosechas.module').then( m => m.AdministrarCosechasPageModule)
  },
  {
    path: 'administrar-almacen',
    loadChildren: () => import('./pages/administrar-almacen/administrar-almacen.module').then( m => m.AdministrarAlmacenPageModule)
  },
  {
    path: 'administrar-cultivos',
    loadChildren: () => import('./pages/administrar-cultivos/administrar-cultivos.module').then( m => m.AdministrarCultivosPageModule)
  },
  {
    path: 'fertilizaciones',
    loadChildren: () => import('./pages/fertilizaciones/fertilizaciones.module').then( m => m.FertilizacionesPageModule)
  },
  {
    path: 'fertilizantes',
    loadChildren: () => import('./pages/fertilizantes/fertilizantes.module').then( m => m.FertilizantesPageModule)
  },
  {
    path: 'alarmas',
    loadChildren: () => import('./pages/alarmas/alarmas.module').then( m => m.AlarmasPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)

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
  },
{path: 'administrar-usuarios',
loadChildren: () => import('./pages/administrar-usuarios/administrar-usuarios.module').then( m => m.AdministrarUsuariosPageModule)
},
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'recuperar-pass',
    loadChildren: () => import('./pages/recuperar-pass/recuperar-pass.module').then( m => m.RecuperarPassPageModule)
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
