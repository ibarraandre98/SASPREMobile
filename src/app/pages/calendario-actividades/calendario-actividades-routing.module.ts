import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioActividadesPage } from './calendario-actividades.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarioActividadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioActividadesPageRoutingModule {}
