import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioActividadesEditarPageRoutingModule } from './calendario-actividades-editar-routing.module';

import { CalendarioActividadesEditarPage } from './calendario-actividades-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioActividadesEditarPageRoutingModule
  ],
  declarations: [CalendarioActividadesEditarPage]
})
export class CalendarioActividadesEditarPageModule {}
