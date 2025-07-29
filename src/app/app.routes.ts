import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ClientePanelComponent } from './component/cliente-panel/cliente-panel.component';
import { ClienteRegistroHierbaComponent } from './component/cliente-registro-hierba/cliente-registro-hierba.component';
import { ClienteListadoHierbaComponent } from './component/cliente-listado-hierba/cliente-listado-hierba.component';

export const routes: Routes = [
          { path: '', component: HomeComponent, title: 'Inicio' },
          {
            path: 'cliente',
            component: ClientePanelComponent,
            children: [
            { path: 'registrar-hierba', component: ClienteRegistroHierbaComponent },
            { path: 'listar-hierba', component: ClienteListadoHierbaComponent },
            { path: '', redirectTo: 'listar-hierba', pathMatch: 'full' } // ruta por defecto
            ]
          }       
          
];
