import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsecticidasPageRoutingModule } from './insecticidas-routing.module';

import { InsecticidasPage } from './insecticidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsecticidasPageRoutingModule
  ],
  declarations: [InsecticidasPage]
})
export class InsecticidasPageModule {}
