import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioActividadesEditarPage } from './calendario-actividades-editar.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarioActividadesEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioActividadesEditarPageRoutingModule {}
