import { Component, OnInit,Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import {AlarmasService} from '../../services/alarmas.service';
import {SemillasService} from '../../services/semillas.service';
import {FormBuilder, Validators} from '@angular/forms';
import { AlertController ,  PopoverController} from '@ionic/angular';
import { Alerts } from './../../models/alerts';
import {Platform} from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { isDate } from 'util';
@Component({
  selector: 'app-alarmas-editar',
  templateUrl: './alarmas-editar.page.html',
  styleUrls: ['./alarmas-editar.page.scss'],
})
export class AlarmasEditarPage implements OnInit {
  alertas:Alerts;
  alarma:any;
  registerForm:any;
  data:any[]=[];
  selectVal:Number=103;
  arrayAlarmas:any;
  semillas:any;
  constructor(private modalCtrl: ModalController,
    private servicesShared:AlarmasService,
    private semillasservices:SemillasService,
    private navParams:NavParams,
    public toastController:ToastController,
    private formBuilder: FormBuilder,
    private popCtrl: PopoverController,
    private platform:Platform,
    private alertController:AlertController,
    )
    {
     
      //:-------------------- cometela prro
      this.alertas = new Alerts(toastController,alertController);
      this.alarma = this.navParams.get('alarma');
      this.registerForm = this.formBuilder.group({
        nombreAlarm:[this.alarma.nombreAlarma,[Validators.required,Validators.maxLength(50)]],
        descripcionAlarm:[this.alarma.descripcion ,[Validators.required,Validators.maxLength(100)]],
        tempMi:[this.alarma.tempMinAlarma,[Validators.required,Validators.pattern("^-?[0-9]\\d*(\\.\\d{1,2})?$")]],
        tempMa:[this.alarma.tempMaxAlarma,[Validators.required,Validators.pattern("^-?[0-9]\\d*(\\.\\d{1,2})?$")]],
        lapsodias:[this.alarma.lapsoDias,[Validators.required,Validators.pattern("^-?[0-9]\\d*(\\.\\d{1,2})?$")]]
        });
        
        this.semillas=this.alarma.idSemillas;
      
        this.mostrarSemillas();
    }
onChange(event){
  //alert("tu seleccionaste id= "+event.target.value);
  this.semillas=event.target.value;
  console.log(event.target.value);
}
mostrarSemillas() {
  console.log("uno");
  this.semillasservices
  .mostrarIdSemillas()
    .then((response) => {
      console.log(response);
      let data = JSON.parse(response.data);
      if (data.resultado == "failed") {
        console.log("Alarmas no mostradas");
        //this.showAlert("Error", "Alarmas no mostradas");
      } else if (data.resultado == "success") {
        let datosAlarmas = data.data;
      //  this.arrayAlarmas = datosAlarmas;
        this.data =datosAlarmas;
      }
    })
    .catch((error) => {
     // this.showAlert("Error", JSON.stringify(error));
    });
    console.log(this.arrayAlarmas);
}

  ngOnInit() {

  }



    get nombreAlarm(){
      return this.registerForm.get('nombreAlarm');
    }
  
    get descripcionAlarm(){
      return this.registerForm.get('descripcionAlarm');
    }
  
    get tempMi(){
      return this.registerForm.get('tempMi');
    }
    get tempMa(){
      return this.registerForm.get('tempMa');
    }
    get lapsodias(){
      return this.registerForm.get('lapsodias');
    }
    public errorMessages = {
      nombreAlarm:[
        {type:'required', message:'Nombre es requerido'},
        {type: 'maxlength', message:'Se exedio el numero de caracteres'}
      ],
      descripcionAlarm:[
        {type:'required', message:'Descripcion requerida es requerido'},
        {type: 'maxlength', message:'Se exedio el numero de caracteres'}],
  
        tempMi:[{type:'required', message:'Valor requerido'},
      {type: 'pattern', message:'Valor no valido'}],

      tempMa:[{type:'required', message:'Valor requerido'},
      {type: 'pattern', message:'Valor no valido'}],
      
      lapsodias:[{type:'required', message:'Valor requerido'},
      {type: 'pattern', message:'Valor no valido'}]
    };
    private datos2 = {
      idAlarmas: "",
      idSemillas: "",
      nombreAlarma: "",
      tempMaxAlarma: "",
      tempMinAlarma: "",
      lapsoDias: "",
      descripcion: "",
    };
    guardarDatos(){
      this.datos2.idAlarmas=this.alarma.idAlarmas;
      this.datos2.idSemillas=this.semillas;
      this.datos2.nombreAlarma=this.registerForm.value.nombreAlarm;
      this.datos2.tempMaxAlarma=this.registerForm.value.tempMa;
      this.datos2.tempMinAlarma=this.registerForm.value.tempMi;
      this.datos2.lapsoDias=this.registerForm.value.lapsodias;
      this.datos2.descripcion=this.registerForm.value.descripcionAlarm;
    }
    onSubmitAlarmas() {
      this.guardarDatos();
      this.servicesShared
        .updateAlarma(this.datos2)
        .then((response) => {
          console.log(response);
          let data = JSON.parse(response.data);
  
          if (data.result == "success") {
            this.datos2.idAlarmas = "";
            this.datos2.idSemillas = "";
            this.datos2.nombreAlarma = "";
            this.datos2.tempMaxAlarma = "";
            this.datos2.tempMinAlarma = "";
            this.datos2.lapsoDias = "";
            this.datos2.descripcion = "";
  
            this.alertas.toast("Exito", "Alerta actualizada con exito");
            this.salirSinArgumentos();
          } else {
            console.log(data.message);
          }
        })
        .catch((error) => {
          this.alertas.showAlert("Error", "Ha ocurrido un error " + error);
        });
    }

  salirSinArgumentos(){
    this.modalCtrl.dismiss();
  }

  salirConArgumentos(){
    this.modalCtrl.dismiss({
      semilla: 'semilla desde hijo',
      nombre:'nombre desde hijo',
      descripcion: 'descripcion desde hijo',
      lapso:'lapso desde hijo',
      temperatura_min: 'temperatura minima desde hijo',
      temperatura_max: 'temperatura maxima desde hijo'
    });
  }

}
