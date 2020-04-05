import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlarmaDetallesPageRoutingModule } from './alarma-detalles-routing.module';

import { AlarmaDetallesPage } from './alarma-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlarmaDetallesPageRoutingModule
  ],
  declarations: [AlarmaDetallesPage]
})
export class AlarmaDetallesPageModule {}
