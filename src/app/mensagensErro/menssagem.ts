import { Injectable } from "@angular/core";
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class menssagens {

    constructor(
        private alertController: AlertController,
        private toastController: ToastController,
    ) { }

    async presentAlert(mensagem: string) {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Alert',
            message: mensagem,
            buttons: ['OK']
        });

        await alert.present();
        await alert.onDidDismiss();
    }
    async presentToast(mensagem: string) {



        try{
            this.toastController.dismiss();
        }catch(e){
            
        }
        const toast = await this.toastController.create({
            message: mensagem,
            //duration: 2000,
            cssClass: 'toast-control',
            position: "bottom",
            buttons: ['cancel'],
        });
        toast.present();
    }
    public messageErro(dados: any): any | [] {
        let errors = []
        if (dados.controls.name.invalid) {
            // this.presentToast('Nome está errado');
            errors.push("Nome está errado");
        }
        //return true;
        if (dados.controls.email.invalid) {
            errors.push("E-mail está errado");
        }
        if(dados.controls.senha.invalid){
            errors.push("Senha está errado");
        }
        if(dados.get('senha').value != dados.get('confSenha').value){
            errors.push("Senhas não conferem");
        }
        return errors;
    }
}