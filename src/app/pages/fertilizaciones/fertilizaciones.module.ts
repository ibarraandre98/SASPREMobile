import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FertilizacionesPageRoutingModule } from './fertilizaciones-routing.module';

import { FertilizacionesPage } from './fertilizaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FertilizacionesPageRoutingModule
  ],
  declarations: [FertilizacionesPage]
})
export class FertilizacionesPageModule {}
