import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { AlarmasPage } from './alarmas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
      path:'',
      component: AlarmasPage
      }
    ])
  ],
  declarations: [AlarmasPage]
})
export class AlarmasPageModule {}
