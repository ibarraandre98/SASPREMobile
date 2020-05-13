import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrarCultivosAgregarPageRoutingModule } from './administrar-cultivos-agregar-routing.module';

import { AdministrarCultivosAgregarPage } from './administrar-cultivos-agregar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrarCultivosAgregarPageRoutingModule
  ],
  declarations: [AdministrarCultivosAgregarPage]
})
export class AdministrarCultivosAgregarPageModule {}
