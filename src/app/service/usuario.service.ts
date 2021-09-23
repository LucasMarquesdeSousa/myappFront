import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient,
  ) { }

  private url:string = 'http://0.0.0.0:3000/api' //docker

  public cadastrarUsuario(dados: usuario){
    return this.http.post(this.url+'/cadastrarUsuario', dados)
  }
  public loginUsuario(dados: usuario){
    return this.http.post(this.url+'/login', dados);
  }

}
