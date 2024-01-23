import { Component } from '@angular/core';
import { ResultadosComponent } from '../resultados/resultados.component';
import { BusquedaComponent } from '../busqueda/busqueda.component';

@Component({
  selector: 'app-gifs-page',
  standalone: true,
  imports: [ResultadosComponent, BusquedaComponent],
  templateUrl: './gifs-page.component.html',
  styleUrl: './gifs-page.component.css',
})
export class GifsPageComponent {}
