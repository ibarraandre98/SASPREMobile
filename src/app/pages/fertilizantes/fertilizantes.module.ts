import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FertilizantesPageRoutingModule } from './fertilizantes-routing.module';

import { FertilizantesPage } from './fertilizantes.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';
import { PopInfoFertilizanteComponent } from '../../components/pop-info-fertilizante/pop-info-fertilizante.component';
import { FertilizantesAgregarPage } from '../fertilizantes-agregar/fertilizantes-agregar.page';
import { FertilizantesEditarPage } from '../fertilizantes-editar/fertilizantes-editar.page';
import { PopOpcionesFertilizanteComponent } from '../../components/pop-opciones-fertilizante/pop-opciones-fertilizante.component';
import { FertilizacionesAgregarPageModule } from '../fertilizaciones-agregar/fertilizaciones-agregar.module';
import { FertilizantesAgregarPageModule } from '../fertilizantes-agregar/fertilizantes-agregar.module';
import { FertilizantesEditarPageModule } from '../fertilizantes-editar/fertilizantes-editar.module';

@NgModule({
  entryComponents:[
    PopInfoFertilizanteComponent,
    FertilizantesAgregarPage,
    FertilizantesEditarPage,
    PopOpcionesFertilizanteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FertilizantesPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    FertilizantesAgregarPageModule,
    FertilizantesEditarPageModule,
    PipesModule
  ],
  declarations: [FertilizantesPage]
})
export class FertilizantesPageModule {}
