import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostosEditarPage } from './costos-editar.page';

const routes: Routes = [
  {
    path: '',
    component: CostosEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CostosEditarPageRoutingModule {}
