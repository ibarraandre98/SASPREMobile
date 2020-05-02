import { AlertController } from '@ionic/angular';
export class Alerts{
    constructor(
        private toastController:any,
        private alertController:any,
    ){}

    async toast(title:string,mensaje:string) {
      const toast = await this.toastController.create({
        header:title,
        message: mensaje,
        duration: 2000,
        position:'top',
        animated:true,
        color:'light',
        buttons: [
          {
            text: 'Cerrar',
            role: 'cancel',
            //handler: () => {
              //console.log('Cancel clicked');
            //}
          }
        ]
      });
      toast.present();
    }

    async showAlert(title: string, content: string) {
      const alert = await this.alertController.create({
        header: title,
        message: content,
        buttons: ["Ok"],
      });
  
      await alert.present();
    }
}