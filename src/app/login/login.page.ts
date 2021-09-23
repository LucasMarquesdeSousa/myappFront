import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private builder: FormBuilder,
    private service: UsuarioService,
    ) { }
    public  formLogin: FormGroup = this.builder.group({
      email: [null, [Validators.required]],
      senha: [null, [Validators.required]]
    });

  ngOnInit() {
  }

  login(){
    if(this.formLogin.valid){
      const dados = this.formLogin.getRawValue();
      this.service.loginUsuario(dados).subscribe(res=>{
        console.log(res)
      });
    }
  }
}
