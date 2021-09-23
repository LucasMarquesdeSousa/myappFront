import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  ) { }
    public form: FormGroup = this.builde.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(3)]],
      confSenha: [null, [Validators.required, Validators.minLength(3)]]
    });
  ngOnInit() {

  }

  cadastroUsuario(){
    if(this.form.valid){
      const dados = this.form.getRawValue();
      this.service.cadastrarUsuario(dados).subscribe(res=>{
        console.log(res);
      });
    }
  }



}
