import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { menssagens } from '../mensagensErro/menssagem';
import { usuario } from '../model/usuario.model';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(
    private builde: FormBuilder,
    private service: UsuarioService,
    private menssagensErro: menssagens,
    private route: Router,
  ) { }
  public form: FormGroup = this.builde.group({
    name: [null, [Validators.required, Validators.minLength(3)]],
    email: [null, [Validators.required, Validators.email]],
    senha: [null, [Validators.required, Validators.minLength(8)]],
    confSenha: [null, [Validators.required, Validators.minLength(8)]]
  });
  ngOnInit() {

  }

  cadastroUsuario() {
    //front
    const retorno = this.menssagensErro.messageErro(this.form)
    if (!retorno.lenght) {
      const dados = this.form.getRawValue();
      this.service.cadastrarUsuario(dados).subscribe(
        res => {
          //back end
          if (res['name']) {
            this.menssagensErro.presentToast(res['name'])
            return;
          }
          if (res['email']) {
            this.menssagensErro.presentToast(res['email'])
            return;
          }
          if (res['senha']) {
            this.menssagensErro.presentToast(res['senha'])
            return;
          }
          if (res['same']) {
            this.menssagensErro.presentToast(res['same'])
            return;
          }
          if (res['mensagem']) {
            this.menssagensErro.presentAlert(res['mensagem'])
            this.route.navigateByUrl('login') 
          }
        }
      );
    }
    for (let i = 0; i < retorno.length; i++) {
      this.menssagensErro.presentToast(retorno[i])
    }
  }
}
