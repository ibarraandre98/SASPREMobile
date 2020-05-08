import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostosPageRoutingModule } from './costos-routing.module';

import { CostosPage } from './costos.page';
import { PopCostosComponent } from 'src/app/components/pop-costos/pop-costos.component';
import { PopInfoCostosComponent } from 'src/app/components/pop-info-costos/pop-info-costos.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { CostosAgregarPage } from '../costos-agregar/costos-agregar.page';
import { CostosEditarPage } from '../costos-editar/costos-editar.page';
import { CostosEditarPageModule } from '../costos-editar/costos-editar.module';
import { CostosAgregarPageModule } from '../costos-agregar/costos-agregar.module';

@NgModule({
  entryComponents:[
    CostosAgregarPage,
    CostosEditarPage,
    PopCostosComponent,
    PopInfoCostosComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostosPageRoutingModule,
    CostosEditarPageModule,
    CostosAgregarPageModule,
    ComponentsModule,
    PipesModule,
  ],
  declarations: [CostosPage]
})
export class CostosPageModule {}
