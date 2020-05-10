import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FertilizacionesEditarPage } from './fertilizaciones-editar.page';

const routes: Routes = [
  {
    path: '',
    component: FertilizacionesEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FertilizacionesEditarPageRoutingModule {}
