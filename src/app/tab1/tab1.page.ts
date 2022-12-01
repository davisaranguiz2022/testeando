import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public alertController: AlertController,
    public toastController: ToastController
  ) {}

  async AgregarLista() {
    let alerta = await this.alertController.create({
      header:"Agregar lista",
      inputs:[
        {
          type:"text",
          name:"titulo",
          placeholder:"Ingresar nombre de la lista"
        }
      ],
      buttons: [
        {
          text:"cancelar",
          role:"cancel"
        },
        {
          text:"crear",
          handler: (data: any)=>{
            this.validInput(data);
              
          }
        }
      ]
    });
    await alerta.present();
    console.log("click en boton");
  }
  validInput(input: any): boolean{
    if (input && input.titulo){
      return true
    }
    this.presentToast("Debe ingresar un valor");
    return false;
  }

 async presentToast(mensage: string){
   let toast = await this.toastController.create({
    message: mensage,
    duration: 2000
   });
   toast.present();

 }

}
