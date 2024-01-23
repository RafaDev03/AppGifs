import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [],
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.css',
})
export class ResultadosComponent implements OnInit {
  constructor(private _gifsService: GifsService) {
    console.log('Dentro del componente resultado');
  }

  ngOnInit(): void {
    this.resultados;
  }

  get resultados() {
    return this._gifsService.resultadosBusqueda;
    //return this._gifsService.resultados;
  }
}
