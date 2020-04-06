import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioActividadesPageRoutingModule } from './calendario-actividades-routing.module';

import { CalendarioActividadesPage } from './calendario-actividades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioActividadesPageRoutingModule
  ],
  declarations: [CalendarioActividadesPage]
})
export class CalendarioActividadesPageModule {}
