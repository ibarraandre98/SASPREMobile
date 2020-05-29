import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrarCultivosAgregarPageRoutingModule } from './administrar-cultivos-agregar-routing.module';

import { AdministrarCultivosAgregarPage } from './administrar-cultivos-agregar.page';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrarCultivosAgregarPageRoutingModule,
    ReactiveFormsModule

  ],
  declarations: [AdministrarCultivosAgregarPage]
})
export class AdministrarCultivosAgregarPageModule {}

