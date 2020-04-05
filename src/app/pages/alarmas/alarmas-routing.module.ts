import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlarmasPage } from './alarmas.page';

const routes: Routes = [
  {
    path: '',
    component: AlarmasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlarmasPageRoutingModule {}
