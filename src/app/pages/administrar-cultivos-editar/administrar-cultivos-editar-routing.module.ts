import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrarCultivosEditarPage } from './administrar-cultivos-editar.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrarCultivosEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrarCultivosEditarPageRoutingModule {}
