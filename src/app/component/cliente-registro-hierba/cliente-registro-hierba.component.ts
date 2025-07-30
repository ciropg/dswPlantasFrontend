import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ICategoriaResponse } from '../../model/categoria-response';
import { CategoriaService } from '../../service/categoria.service';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HierbaService } from '../../service/hierba.service';
import { IHierbaRequest } from '../../model/hierba-request';

@Component({
  selector: 'app-cliente-registro-hierba',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cliente-registro-hierba.component.html',
  styleUrl: './cliente-registro-hierba.component.css'
})
export class ClienteRegistroHierbaComponent implements OnInit {
  categorias: ICategoriaResponse[] = [];
  hierbaForm: FormGroup;

  constructor(private categoriaService: CategoriaService,private fb: FormBuilder, private hierbaService: HierbaService, ) {
    this.hierbaForm = this.fb.group({
      nombreComun: ['', Validators.required],
      nombreCientifico: ['', Validators.required],
      descripcion: [null, Validators.required],
      propiedades: ['', Validators.required],
      usos: ['', Validators.required],
      categoria: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe({
      next: (data) => {
        this.categorias = data;
        console.log('Categorias cargadas:', this.categorias);
      },
      error: (err) => {
        console.error('Error al obtener categorias:', err);
      }
    });
  }
  onSubmit(): void {
    if (this.hierbaForm.valid) {
      const form = this.hierbaForm.value;

      const nuevaHierba: IHierbaRequest = {
        nombreComun: form.nombreComun,
        nombreCientifico: form.nombreCientifico,
        descripcion: form.descripcion,
        propiedades: form.propiedades,
        usos: form.usos,
        categoriaId: form.categoria  // solo el ID
      };

      this.hierbaService.registrarHierba(nuevaHierba).subscribe({
        next: (res) => {
          console.log('Hierba registrada exitosamente:', res);
          alert('Hierba registrada correctamente.');
          this.hierbaForm.reset(); // Limpia el formulario
        },
        error: (err) => {
          console.error('Error al registrar hierba:', err);
          alert('Error al registrar la hierba. Verifica los datos.');
        }
      });

    } else {
      console.log('Formulario no válido');
      Object.values(this.hierbaForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  } 
}
