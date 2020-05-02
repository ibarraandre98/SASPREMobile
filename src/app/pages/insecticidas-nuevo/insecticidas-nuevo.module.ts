import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsecticidasNuevoPageRoutingModule } from './insecticidas-nuevo-routing.module';

import { InsecticidasNuevoPage } from './insecticidas-nuevo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsecticidasNuevoPageRoutingModule
  ],
  declarations: [InsecticidasNuevoPage]
})
export class InsecticidasNuevoPageModule {}
