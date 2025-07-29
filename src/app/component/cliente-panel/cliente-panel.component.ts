import { Component } from '@angular/core';
import { SidebarClienteComponent } from "../sidebar-cliente/sidebar-cliente.component";
import { RouterOutlet }  from '@angular/router';

@Component({
  selector: 'app-cliente-panel',
  standalone: true,
  imports: [SidebarClienteComponent, RouterOutlet,SidebarClienteComponent],
  templateUrl: './cliente-panel.component.html',
  styleUrl: './cliente-panel.component.css'
})
export class ClientePanelComponent {

}
