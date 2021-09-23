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
        const toast = await this.toastController.create({
            message: mensagem,
            // duration: 2000,
            buttons: ['cancel'],
        });
        toast.present();
    }
    public messageErro(dados: any): boolean {
        if (dados.controls.name.invalid) {
            this.presentToast('Nome está errado');
            return false;
        }
        //return true;
        if (dados.controls.email.invalid) {
            this.presentToast('E-mail está errado');
            return false;
        }
        if(dados.controls.senha.invalid){
            this.presentToast('Senha está errado');
            return false;
        }
        if(dados.get('senha').value != dados.get('confSenha').value){
            this.presentToast('Senhas não conferem')
            return false;
        }
        return true;
    }
}