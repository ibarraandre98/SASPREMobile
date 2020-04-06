import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrarCosechasPage } from './administrar-cosechas.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrarCosechasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrarCosechasPageRoutingModule {}
