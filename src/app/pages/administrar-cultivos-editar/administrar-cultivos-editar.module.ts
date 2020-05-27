import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrarCultivosEditarPageRoutingModule } from './administrar-cultivos-editar-routing.module';

import { AdministrarCultivosEditarPage } from './administrar-cultivos-editar.page';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrarCultivosEditarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AdministrarCultivosEditarPage]
})
export class AdministrarCultivosEditarPageModule {}
