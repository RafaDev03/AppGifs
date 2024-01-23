import { Component, Inject, OnInit, inject } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';
import { Console } from 'console';
import { BusquedaComponent } from '../../gifs/busqueda/busqueda.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [BusquedaComponent, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  constructor(private _gifsService: GifsService) {}

  ngOnInit(): void {
    this.resultado;
  }

  get resultado() {
    return this._gifsService.historialBusquedas;
  }

  buscar(item: string) {
    this._gifsService.buscarGifs(item);
  }
}
