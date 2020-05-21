import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostosEditarPageRoutingModule } from './costos-editar-routing.module';

import { CostosEditarPage } from './costos-editar.page';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostosEditarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CostosEditarPage]
})
export class CostosEditarPageModule {}




