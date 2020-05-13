import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrarCultivosPageRoutingModule } from './administrar-cultivos-routing.module';

import { AdministrarCultivosPage } from './administrar-cultivos.page';
import { AdministrarCultivosAgregarPage } from '../administrar-cultivos-agregar/administrar-cultivos-agregar.page';
import { AdministrarCultivosEditarPage } from '../administrar-cultivos-editar/administrar-cultivos-editar.page';
import { PopCultivosComponent } from 'src/app/components/pop-cultivos/pop-cultivos.component';
import { PopInfoCultivosComponent } from 'src/app/components/pop-info-cultivos/pop-info-cultivos.component';
import { AdministrarCultivosAgregarPageModule } from '../administrar-cultivos-agregar/administrar-cultivos-agregar.module';
import { AdministrarCultivosEditarPageModule } from '../administrar-cultivos-editar/administrar-cultivos-editar.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  entryComponents: [
    AdministrarCultivosAgregarPage,
    AdministrarCultivosEditarPage,
    PopCultivosComponent,
    PopInfoCultivosComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrarCultivosPageRoutingModule,
    AdministrarCultivosAgregarPageModule,
    AdministrarCultivosEditarPageModule,
    ComponentsModule,
    PipesModule,
  ],
  declarations: [AdministrarCultivosPage]
})
export class AdministrarCultivosPageModule { }
