import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FertilizacionesPage } from './fertilizaciones.page';

const routes: Routes = [
  {
    path: '',
    component: FertilizacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FertilizacionesPageRoutingModule {}
