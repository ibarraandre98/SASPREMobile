import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostosAgregarPageRoutingModule } from './costos-agregar-routing.module';

import { CostosAgregarPage } from './costos-agregar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostosAgregarPageRoutingModule
  ],
  declarations: [CostosAgregarPage]
})
export class CostosAgregarPageModule {}
