import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrarCultivosPage } from './administrar-cultivos.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrarCultivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrarCultivosPageRoutingModule {}
