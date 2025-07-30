import { ICategoriaResponse } from "./categoria-response";

export interface IHierbaResponse {
          id: number;
          nombreComun: string;
          nombreCientifico: string;
          descripcion: string;
          propiedades: string;
          usos: string;
          fechaRegistro: Date; // Cambiado a Date para manejar fechas
          categoria: ICategoriaResponse // 
}
