import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioActividadesPageRoutingModule } from './calendario-actividades-routing.module';

import { CalendarioActividadesPage } from './calendario-actividades.page';
import { PopCalendarioActividadesComponent } from 'src/app/components/pop-calendario-actividades/pop-calendario-actividades.component';
import { PopInfoCalendarioActividadesComponent } from 'src/app/components/pop-info-calendario-actividades/pop-info-calendario-actividades.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { CalendarioActividadesAgregarPage } from '../calendario-actividades-agregar/calendario-actividades-agregar.page';
import { CalendarioActividadesEditarPage } from '../calendario-actividades-editar/calendario-actividades-editar.page';
import { CalendarioActividadesEditarPageModule } from '../calendario-actividades-editar/calendario-actividades-editar.module';
import { CalendarioActividadesAgregarPageModule } from '../calendario-actividades-agregar/calendario-actividades-agregar.module';

@NgModule({
  entryComponents:[
    CalendarioActividadesAgregarPage,
    CalendarioActividadesEditarPage,
    PopCalendarioActividadesComponent,
    PopInfoCalendarioActividadesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioActividadesPageRoutingModule,
    CalendarioActividadesEditarPageModule,
    CalendarioActividadesAgregarPageModule,
    ComponentsModule,
    PipesModule,
  ],
  declarations: [CalendarioActividadesPage]
})
export class CalendarioActividadesPageModule {}
