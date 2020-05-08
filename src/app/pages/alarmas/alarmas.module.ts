import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { AlarmasPage } from './alarmas.page';
import { PopAlarmasComponent } from 'src/app/components/pop-alarmas/pop-alarmas.component';
import { PopInfoAlarmasComponent } from 'src/app/components/pop-info-alarmas/pop-info-alarmas.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { AlarmasAgregarPage } from '../alarmas-agregar/alarmas-agregar.page';
import { AlarmasEditarPage } from '../alarmas-editar/alarmas-editar.page';
import { AlarmasAgregarPageModule } from '../alarmas-agregar/alarmas-agregar.module';
import { AlarmasEditarPageModule } from '../alarmas-editar/alarmas-editar.module';
import { AlarmasPageRoutingModule } from './alarmas-routing.module';

@NgModule({
  entryComponents:[
    AlarmasAgregarPage,
    AlarmasEditarPage,
    PopAlarmasComponent,
    PopInfoAlarmasComponent
    
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlarmasPageRoutingModule,
    AlarmasEditarPageModule,
    AlarmasAgregarPageModule,
    ComponentsModule,
    PipesModule,
  ],
  declarations: [AlarmasPage]
})
export class AlarmasPageModule {}
