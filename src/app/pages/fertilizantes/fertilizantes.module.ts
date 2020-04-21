import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FertilizantesPageRoutingModule } from './fertilizantes-routing.module';

import { FertilizantesPage } from './fertilizantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FertilizantesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FertilizantesPage]
})
export class FertilizantesPageModule {}
