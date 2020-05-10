import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FertilizantesAgregarPage } from './fertilizantes-agregar.page';

const routes: Routes = [
  {
    path: '',
    component: FertilizantesAgregarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FertilizantesAgregarPageRoutingModule {}
