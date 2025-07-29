import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuarioRequest } from '../model/usuario-request';
import { Observable } from 'rxjs';
import { IUsuarioResponse } from '../model/usuario-response';
import { Base_URL } from '../utils/constantes';
import { IUsuarioLoginRequest } from '../model/usuario-login-request';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {}
  registrarUsuario(usuario: IUsuarioRequest): Observable<IUsuarioResponse> {
    console.log(usuario);
    return this.http.post<IUsuarioResponse>(`${Base_URL}/usuarios/registro`, usuario);
  }
  login(usuarioLogin: IUsuarioLoginRequest): Observable<IUsuarioResponse> {
    console.log('Intentando login con:', usuarioLogin);
    return this.http.post<IUsuarioResponse>(`${Base_URL}/usuarios/login`, usuarioLogin);
  }

}
