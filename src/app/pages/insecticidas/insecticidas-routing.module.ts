import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsecticidasPage } from './insecticidas.page';

const routes: Routes = [
  {
    path: '',
    component: InsecticidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsecticidasPageRoutingModule {}
