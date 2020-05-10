import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FertilizacionesAgregarPageRoutingModule } from './fertilizaciones-agregar-routing.module';

import { FertilizacionesAgregarPage } from './fertilizaciones-agregar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FertilizacionesAgregarPageRoutingModule
  ],
  declarations: [FertilizacionesAgregarPage]
})
export class FertilizacionesAgregarPageModule {}
