import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostosEditarPageRoutingModule } from './costos-editar-routing.module';

import { CostosEditarPage } from './costos-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostosEditarPageRoutingModule
  ],
  declarations: [CostosEditarPage]
})
export class CostosEditarPageModule {}
