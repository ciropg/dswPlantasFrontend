import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-cliente',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar-cliente.component.html',
  styleUrl: './sidebar-cliente.component.css'
})
export class SidebarClienteComponent {
  nombreUsuario: string = '';
  rol: string = '';
  constructor() {
    if (typeof window !== 'undefined' && localStorage.getItem('usuario')) {
      const usuario = JSON.parse(localStorage.getItem('usuario')!);
      this.nombreUsuario = usuario?.nombreUsuario || '';
      this.rol = usuario?.rol || '';
    }
  }

  

}
