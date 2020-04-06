import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrarUsuariosPage } from './administrar-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrarUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrarUsuariosPageRoutingModule {}
