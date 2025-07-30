import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHierbaRequest } from '../model/hierba-request';
import { IHierbaResponse } from '../model/hierba-response';
import { Base_URL } from '../utils/constantes';

@Injectable({
  providedIn: 'root'
})
export class HierbaService {

  constructor(private http: HttpClient) {}

  // Método para registrar una nueva hierba
  registrarHierba(hierba: IHierbaRequest): Observable<IHierbaResponse> {
    console.log('Registrando hierba:', hierba);
    return this.http.post<IHierbaResponse>(`${Base_URL}/hierbas`, hierba);
  }

  // Método para listar todas las hierbas
  listarHierbas(): Observable<IHierbaResponse[]> {
    return this.http.get<IHierbaResponse[]>(`${Base_URL}/hierbas`);
  }
  eliminarHierba(id: number): Observable<void> {
    return this.http.delete<void>(`${Base_URL}/hierbas/${id}`);
  }
  actualizarHierba(id: number, hierba: IHierbaRequest): Observable<IHierbaResponse> {
    return this.http.put<IHierbaResponse>(`${Base_URL}/hierbas/actualizar/${id}`, hierba);
  }      
}
