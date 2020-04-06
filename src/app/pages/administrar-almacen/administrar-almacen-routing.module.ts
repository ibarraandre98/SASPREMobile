import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrarAlmacenPage } from './administrar-almacen.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrarAlmacenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrarAlmacenPageRoutingModule {}
