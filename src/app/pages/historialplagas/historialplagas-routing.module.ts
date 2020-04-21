import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialplagasPage } from './historialplagas.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialplagasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialplagasPageRoutingModule {}
