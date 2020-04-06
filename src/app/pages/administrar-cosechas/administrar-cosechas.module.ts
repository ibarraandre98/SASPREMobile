import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrarCosechasPageRoutingModule } from './administrar-cosechas-routing.module';

import { AdministrarCosechasPage } from './administrar-cosechas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrarCosechasPageRoutingModule
  ],
  declarations: [AdministrarCosechasPage]
})
export class AdministrarCosechasPageModule {}
