import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioActividadesAgregarPageRoutingModule } from './calendario-actividades-agregar-routing.module';

import { CalendarioActividadesAgregarPage } from './calendario-actividades-agregar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioActividadesAgregarPageRoutingModule
  ],
  declarations: [CalendarioActividadesAgregarPage]
})
export class CalendarioActividadesAgregarPageModule {}
