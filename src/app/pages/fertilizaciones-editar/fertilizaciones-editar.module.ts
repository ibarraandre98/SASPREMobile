import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FertilizacionesEditarPageRoutingModule } from './fertilizaciones-editar-routing.module';

import { FertilizacionesEditarPage } from './fertilizaciones-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FertilizacionesEditarPageRoutingModule
  ],
  declarations: [FertilizacionesEditarPage]
})
export class FertilizacionesEditarPageModule {}
