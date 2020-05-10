import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FertilizantesEditarPageRoutingModule } from './fertilizantes-editar-routing.module';

import { FertilizantesEditarPage } from './fertilizantes-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FertilizantesEditarPageRoutingModule
  ],
  declarations: [FertilizantesEditarPage]
})
export class FertilizantesEditarPageModule {}
