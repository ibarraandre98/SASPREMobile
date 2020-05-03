import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrarUsuariosEditarPageRoutingModule } from './administrar-usuarios-editar-routing.module';

import { AdministrarUsuariosEditarPage } from './administrar-usuarios-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrarUsuariosEditarPageRoutingModule
  ],
  declarations: [AdministrarUsuariosEditarPage]
})
export class AdministrarUsuariosEditarPageModule {}
