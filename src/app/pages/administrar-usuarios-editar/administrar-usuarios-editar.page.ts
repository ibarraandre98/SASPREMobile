import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-administrar-usuarios-editar',
  templateUrl: './administrar-usuarios-editar.page.html',
  styleUrls: ['./administrar-usuarios-editar.page.scss'],
})
export class AdministrarUsuariosEditarPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

    /*Para enviar datos del padre al hijo (modal) */
    @Input() nombre;
    @Input() apellidos;
    @Input() usuario;
    @Input() correo;
    @Input() contraseña;
    @Input() cargo;
    @Input() empresa;

  ngOnInit() {
  }

  salirSinArgumentos(){
    this.modalCtrl.dismiss();
  }

  salirConArgumentos(){
    this.modalCtrl.dismiss({
      nombre: 'nombre',
      apellidos: 'apellidos',
      usuario: 'usuario',
      correo: 'correo',
      contraseña:'contraseña',
      cargo:'cargo',
      empresa: 'empresa'
    });
  }

}
