import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FertilizantesEditarPage } from './fertilizantes-editar.page';

const routes: Routes = [
  {
    path: '',
    component: FertilizantesEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FertilizantesEditarPageRoutingModule {}
