import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { InsecticidasService } from '../../services/insecticidas.service';
import { Alerts } from './../../models/alerts';

@Component({
  selector: 'app-insecticidas-editar',
  templateUrl: './insecticidas-editar.page.html',
  styleUrls: ['./insecticidas-editar.page.scss'],
})
export class InsecticidasEditarPage implements OnInit {
  
  insecticida;
 
  constructor(private modalCtrl:ModalController,
    public insecticidasService: InsecticidasService,
    private alerts:Alerts,
    private navParams:NavParams,
    ) 
    {
      this.insecticida = this.navParams.get('insecticida');
      this.insecticidas.idInsecticidas = this.insecticida.idInsecticidas;
      this.insecticidas.nombreInsecticida = this.insecticida.nombreInsecticida;
      this.insecticidas.precio = this.insecticida.precio;
      this.insecticidas.descripcion = this.insecticida.descripcion;
    }
    
    insecticidas = {
      idInsecticidas:'',
      nombreInsecticida:'',
      precio:'',
      descripcion:'',
    }

  ngOnInit() {
  }


  salirSinArgumentos(){
    this.modalCtrl.dismiss();
  }
  onSubmitInsecticida(){
    console.log(this.insecticidas);
    if(this.insecticidas.idInsecticidas == '' ||this.insecticidas.nombreInsecticida == '' || this.insecticidas.precio == '' 
    || this.insecticidas.descripcion == ''){
      this.alerts.showAlert('Error','Faltan campos por completar');
      return;
    }
    this.updateInsecticidas();
  }
  salirConArgumentos(){
    this.modalCtrl.dismiss({
    });
  }
  updateInsecticidas() {
    this.insecticidasService.updateInsecticidas(this.insecticidas)
      .then(response => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == 'success') {
          this.insecticidas.idInsecticidas = '';
          this.insecticidas.nombreInsecticida = '';
          this.insecticidas.precio = '';
          this.insecticidas.descripcion = '';

          this.alerts.toast('Exito', 'Insecticida actualizada con exito');
          //this.router.navigateByUrl('/menu');
        } else {
          console.log(data.message);
          this.alerts.showAlert('Error', 'Ha ocurrido un error');
        }
      }
      )
      .catch(error => {
       this.alerts.showAlert('Error', 'Ha ocurrido un error ' + error);
      });

      this.salirSinArgumentos();
  }
}
