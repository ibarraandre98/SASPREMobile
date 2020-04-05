import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FertilizantesPage } from './fertilizantes.page';

const routes: Routes = [
  {
    path: '',
    component: FertilizantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FertilizantesPageRoutingModule {}
