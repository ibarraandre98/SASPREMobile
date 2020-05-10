import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FertilizacionesPageRoutingModule } from './fertilizaciones-routing.module';

import { FertilizacionesPage } from './fertilizaciones.page';

import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';
import { FertilizacionesAgregarPage } from '../fertilizaciones-agregar/fertilizaciones-agregar.page';
import { FertilizacionesEditarPage } from '../fertilizaciones-editar/fertilizaciones-editar.page';
import { PopInfoFertilizacionesComponent } from '../../components/pop-info-fertilizaciones/pop-info-fertilizaciones.component';
import { PopOpcionesFertilizacionesComponent } from '../../components/pop-opciones-fertilizaciones/pop-opciones-fertilizaciones.component';
import { FertilizacionesAgregarPageModule } from '../fertilizaciones-agregar/fertilizaciones-agregar.module';
import { FertilizacionesEditarPageModule } from '../fertilizaciones-editar/fertilizaciones-editar.module';

@NgModule({
  entryComponents:[
    FertilizacionesAgregarPage,
    FertilizacionesEditarPage,
    PopInfoFertilizacionesComponent,
    PopOpcionesFertilizacionesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FertilizacionesPageRoutingModule,
    ComponentsModule,
    FertilizacionesAgregarPageModule,
    FertilizacionesEditarPageModule,
    PipesModule
  ],
  declarations: [FertilizacionesPage]
})
export class FertilizacionesPageModule {}
