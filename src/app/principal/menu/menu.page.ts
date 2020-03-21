import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  imageProfile = new Image();
  constructor(
    private menu:MenuController,
  ) {
    this.imageProfile.src = '../../../assets/icon/logo.png';
    this.imageProfile.width = 50;
    this.imageProfile.height = 50;
   }

  ngOnInit() {
    
  }

}
