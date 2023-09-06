import { Component, OnInit } from '@angular/core';
import { RestLibreriaService, Autor, Libro } from '../../services/rest-libreria.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {

  displayedColumns: string[] = ['ISBN', 'anio_publicacion', 'cantidad_en_stock', 'genero', 'precio', 'titulo'];
  dataSource:Libro[] = [];
  autores: any[] = [];

  constructor(private restLibreria:RestLibreriaService){
  }
  ngOnInit(): void {

    this.restLibreria.getAllAutores().subscribe(result=>{
      result.forEach(({id,nombre})=>this.autores.push({value:id, viewValue:nombre}))
    })
  }

  obtenerLibrosPorAutor(change:any){
    console.log(change.value);
    this.restLibreria.getLibroPorAutor(change.value).subscribe(result=>{
      this.dataSource = result;
  })
  }

}
