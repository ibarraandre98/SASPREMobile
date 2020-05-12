import { AlarmasService } from './../../services/alarmas.service';
import { Component, OnInit } from "@angular/core";
import { AppComponent } from "src/app/app.component";
import { PopoverController,NavParams } from "@ionic/angular";

@Component({
  selector: "app-pop-alarmas",
  templateUrl: "./pop-alarmas.component.html",
  styleUrls: ["./pop-alarmas.component.scss"],
})
export class PopAlarmasComponent implements OnInit {
  
  alarma:any;
  constructor(
    private popoverCtrl:PopoverController,
    private navParams:NavParams,
    private alarmasService:AlarmasService,
    ) {
      this.alarma = this.navParams.get('alarma');
    }

  ngOnInit() {}

  clickEditar() {
    console.log("Se oprimio editar");
    this.popoverCtrl.dismiss({
      item: "Editar",
    });
  }

  clickBorrar() {
    this.alarmasService.deleteAlarma(this.alarma)
    .then(response => {
      console.log(response);
    });
    this.popoverCtrl.dismiss({
      item: "Borrar",
    });
  }
}
