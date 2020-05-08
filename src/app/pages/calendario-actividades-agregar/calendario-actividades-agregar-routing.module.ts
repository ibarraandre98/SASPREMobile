import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioActividadesAgregarPage } from './calendario-actividades-agregar.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarioActividadesAgregarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioActividadesAgregarPageRoutingModule {}
