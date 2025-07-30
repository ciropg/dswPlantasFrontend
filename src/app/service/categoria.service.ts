import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategoriaResponse } from '../model/categoria-response';
import { Base_URL } from '../utils/constantes';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }
  listarCategorias(): Observable<ICategoriaResponse[]> {
    return this.http.get<ICategoriaResponse[]>(`${Base_URL}/categorias`);
  }  
}
