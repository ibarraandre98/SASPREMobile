import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrarUsuariosPageRoutingModule } from './administrar-usuarios-routing.module';

import { AdministrarUsuariosPage } from './administrar-usuarios.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { PopUsuariosComponent } from 'src/app/components/pop-usuarios/pop-usuarios.component';
import { AdministrarUsuariosEditarPageModule } from '../administrar-usuarios-editar/administrar-usuarios-editar.module';
import { AdministrarUsuariosEditarPage } from '../administrar-usuarios-editar/administrar-usuarios-editar.page';
import { PopInsecticidasComponent } from 'src/app/components/pop-insecticidas/pop-insecticidas.component';

@NgModule({
  entryComponents:[
    PopUsuariosComponent,
    AdministrarUsuariosEditarPage,
    PopInsecticidasComponent
  ],  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrarUsuariosPageRoutingModule,
    AdministrarUsuariosEditarPageModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [AdministrarUsuariosPage]
})
export class AdministrarUsuariosPageModule {}
