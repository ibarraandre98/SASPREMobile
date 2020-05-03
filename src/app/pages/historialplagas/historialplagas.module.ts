import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialplagasPageRoutingModule } from './historialplagas-routing.module';

import { HistorialplagasPage } from './historialplagas.page';
import { PopInfoHistorialComponent } from 'src/app/components/pop-info-historial/pop-info-historial.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  entryComponents:[
    PopInfoHistorialComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialplagasPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [HistorialplagasPage]
})
export class HistorialplagasPageModule {}
