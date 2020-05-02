import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoRegistroPageRoutingModule } from './info-registro-routing.module';

import { InfoRegistroPage } from './info-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoRegistroPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [InfoRegistroPage]
})
export class InfoRegistroPageModule {}
