import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrarCultivosAgregarPage } from './administrar-cultivos-agregar.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrarCultivosAgregarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrarCultivosAgregarPageRoutingModule {}
