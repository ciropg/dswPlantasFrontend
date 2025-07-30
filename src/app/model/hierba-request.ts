export interface IHierbaRequest {
          nombreComun: string;
          nombreCientifico: string;
          descripcion: string;
          propiedades: string;
          usos: string;
          categoriaId: number; // solo enviamos el ID de la categoría
}
