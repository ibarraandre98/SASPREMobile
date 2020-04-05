import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlarmaDetallesPage } from './alarma-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: AlarmaDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlarmaDetallesPageRoutingModule {}
