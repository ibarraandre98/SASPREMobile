import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FertilizacionesPageRoutingModule } from './fertilizaciones-routing.module';

import { FertilizacionesPage } from './fertilizaciones.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FertilizacionesPageRoutingModule
  ],
  declarations: [FertilizacionesPage]
})
export class FertilizacionesPageModule {}
