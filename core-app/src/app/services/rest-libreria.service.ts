import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

export interface Autor {
  id:number;
  nombre: string;
  nacionalidad: string;
  fecha_nacimiento: string;
}

export interface Libro {
  isbn: string;
  titulo: string;
  genero: string;
  anio_publicacion:string;
  precio:number;
  cantidad_en_stock:number;
}

@Injectable({
  providedIn: 'root'
})
export class RestLibreriaService {
  private url = "http://localhost:3000/rest"

  constructor(private http:HttpClient) { }

  getAllAutores():Observable<Autor[]>{
    const autores_url = `${this.url}/autor/findAll`;
    return this.http.get(autores_url) as Observable<Autor[]>;
  }

  getLibroPorAutor(id:number):Observable<Libro[]>{
    const libro_url = `${this.url}/libro/findByAutor/${id}`
    return this.http.get(libro_url) as Observable<Libro[]>;
  }
}
