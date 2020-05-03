import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrarCosechasPageRoutingModule } from './administrar-cosechas-routing.module';

import { AdministrarCosechasPage } from './administrar-cosechas.page';
import { PopCosechasComponent } from 'src/app/components/pop-cosechas/pop-cosechas.component';
import { PopInfoCosechasComponent } from 'src/app/components/pop-info-cosechas/pop-info-cosechas.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  entryComponents:[
    PopCosechasComponent,
    PopInfoCosechasComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrarCosechasPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [AdministrarCosechasPage]
})
export class AdministrarCosechasPageModule {}
