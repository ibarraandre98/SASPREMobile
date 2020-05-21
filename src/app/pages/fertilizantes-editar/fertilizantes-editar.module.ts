import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FertilizantesEditarPageRoutingModule } from './fertilizantes-editar-routing.module';

import { FertilizantesEditarPage } from './fertilizantes-editar.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FertilizantesEditarPageRoutingModule
  ],
  declarations: [FertilizantesEditarPage]
})
export class FertilizantesEditarPageModule {}
