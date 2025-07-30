import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HierbaService } from '../../service/hierba.service';
import { IHierbaResponse } from '../../model/hierba-response';

import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { IHierbaRequest } from '../../model/hierba-request';
import { ICategoriaResponse } from '../../model/categoria-response';
import { CategoriaService } from '../../service/categoria.service';
@Component({
  selector: 'app-cliente-listado-hierba',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule, FormsModule],
  templateUrl: './cliente-listado-hierba.component.html',
  styleUrl: './cliente-listado-hierba.component.css'
})
export class ClienteListadoHierbaComponent implements OnInit {
  modalVisible = false;
  hierbaSeleccionadaId: number | null = null;

  formularioEdicion: IHierbaRequest = {
    nombreComun: '',
    nombreCientifico: '',
    descripcion: '',
    propiedades: '',
    usos: '',
    categoriaId: 0
  };
  categorias: ICategoriaResponse[] = [];

  hierbas: IHierbaResponse[] = [];
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(private hierbaService: HierbaService, private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.cargarHierbas();
    this.cargarCategorias();

  }
  cargarCategorias(): void {
    this.categoriaService.listarCategorias().subscribe({
      next: (data) => {
        this.categorias = data;
        console.log('Categorias cargadas:', this.categorias);
      },
      error: (err) => {
        console.error('Error cargando categorias:', err);
      }
    });
  }  

  cargarHierbas(): void {
    this.hierbaService.listarHierbas().subscribe({
      next: (data) => {
        this.hierbas = data;
      },
      error: (err) => {
        console.error('Error al cargar hierbas:', err);
      }
    });
  }

  editarHierba(id: number): void {
    const hierba = this.hierbas.find(h => h.id === id);
    if (hierba) {
      this.hierbaSeleccionadaId = id;
      this.formularioEdicion = {
        nombreComun: hierba.nombreComun,
        nombreCientifico: hierba.nombreCientifico,
        descripcion: hierba.descripcion,
        propiedades: hierba.propiedades,
        usos: hierba.usos,
        categoriaId: hierba.categoria.id
      };
      this.modalVisible = true;
    }
  }

eliminarHierba(id: number): void {
  if (confirm('¿Está seguro de que desea eliminar esta hierba?')) {
    this.hierbaService.eliminarHierba(id).subscribe({
      next: () => {
        alert('Hierba eliminada correctamente');
        this.cargarHierbas(); // Recargar lista
      },
      error: (err) => {
        console.error('Error al eliminar hierba:', err);
        alert('Error al eliminar la hierba');
      }
    });
  }
 }
  guardarEdicion(): void {
    if (this.hierbaSeleccionadaId !== null) {
      this.hierbaService.actualizarHierba(this.hierbaSeleccionadaId, this.formularioEdicion).subscribe({
        next: () => {
          alert('Hierba actualizada correctamente');
          this.cargarHierbas();
          this.modalVisible = false;
        },
        error: (err) => {
          console.error('Error al actualizar hierba:', err);
          alert('Error al actualizar la hierba');
        }
      });
    }
  } 
}