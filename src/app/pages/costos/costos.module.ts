import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostosPageRoutingModule } from './costos-routing.module';

import { CostosPage } from './costos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostosPageRoutingModule
  ],
  declarations: [CostosPage]
})
export class CostosPageModule {}
