import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FertilizantesAgregarPageRoutingModule } from './fertilizantes-agregar-routing.module';

import { FertilizantesAgregarPage } from './fertilizantes-agregar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FertilizantesAgregarPageRoutingModule
  ],
  declarations: [FertilizantesAgregarPage]
})
export class FertilizantesAgregarPageModule {}
