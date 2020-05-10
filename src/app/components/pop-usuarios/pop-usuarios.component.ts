import { NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-usuarios',
  templateUrl: './pop-usuarios.component.html',
  styleUrls: ['./pop-usuarios.component.scss'],
})
export class PopUsuariosComponent implements OnInit {

  usuario:any;

  constructor(
    private navParams:NavParams,
  ) { }

  ngOnInit() {
    this.usuario = this.navParams.get('usuario');
  }

}
