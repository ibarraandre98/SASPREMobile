import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrarUsuariosPageRoutingModule } from './administrar-usuarios-routing.module';

import { AdministrarUsuariosPage } from './administrar-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrarUsuariosPageRoutingModule
  ],
  declarations: [AdministrarUsuariosPage]
})
export class AdministrarUsuariosPageModule {}
