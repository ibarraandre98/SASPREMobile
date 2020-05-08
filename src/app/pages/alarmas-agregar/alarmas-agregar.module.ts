import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlarmasAgregarPageRoutingModule } from './alarmas-agregar-routing.module';

import { AlarmasAgregarPage } from './alarmas-agregar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlarmasAgregarPageRoutingModule
  ],
  declarations: [AlarmasAgregarPage]
})
export class AlarmasAgregarPageModule {}
