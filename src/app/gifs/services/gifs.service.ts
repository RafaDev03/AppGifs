import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gifs, SearchGifsResponse } from '../interfaces/gifs.interface';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'VfHMJ9zhmHqJ46ykwIP4G9GHo815Makl';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private localStorageKey = 'historial';
  private localStorageKey2 = 'resultados';
  private listBusquedas: string[] = [];
  public resultados: Gifs[] = [];

  constructor(private _httpClient: HttpClient) {}

  buscarGifs(query: string = '') {
    if (!this.listBusquedas.includes(query.trim().toLocaleLowerCase())) {
      this.listBusquedas.unshift(query);
      this.listBusquedas = this.listBusquedas.splice(0, 10);
      localStorage.setItem(
        this.localStorageKey,
        JSON.stringify(this.listBusquedas)
      );
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this._httpClient
      .get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
      .subscribe((response: SearchGifsResponse) => {
        console.log(response.data);
        this.resultados = response.data;
        localStorage.setItem(
          this.localStorageKey2,
          JSON.stringify(this.resultados)
        );
      });
  }

  get historialBusquedas() {
    return JSON.parse(localStorage.getItem(this.localStorageKey)!) || [];
  }

  get resultadosBusqueda() {
    return JSON.parse(localStorage.getItem(this.localStorageKey2)!) || [];
  }
}
