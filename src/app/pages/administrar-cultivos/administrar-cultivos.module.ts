import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrarCultivosPageRoutingModule } from './administrar-cultivos-routing.module';

import { AdministrarCultivosPage } from './administrar-cultivos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrarCultivosPageRoutingModule
  ],
  declarations: [AdministrarCultivosPage]
})
export class AdministrarCultivosPageModule {}
