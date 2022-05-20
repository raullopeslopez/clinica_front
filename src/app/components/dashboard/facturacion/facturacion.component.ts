import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent implements OnInit {

  facturacionGlobal: any 

  param = new HttpParams()
  fechaMin : any
  fechaMax : any

  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'nutricionista',
    'minutos_trabajados',
    'facturacion_bruta',
    'facturacion_neta',
    'facturacion_bruta_hora',
    'facturacion_neta_hora',
    'numero_consultas',
    'opciones'];

  constructor(private http:HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.getFacturacionGlobal(this.fechaMin, this.fechaMax);
  }

  getNutricionista(idNutricionista: Number) {
    this.router.navigate(['/dashboard/facturacion-nutricionista-mensual', idNutricionista])
    console.log('ID NUTRI: ' + idNutricionista)
  }

  getFacturacionGlobal(fMin: any, fMax:any) {
    this.fechaMin = fMin
    this.fechaMax = fMax
    this.param = new HttpParams()
    .set('fechaMin', this.fechaMin)
    .set('fechaMax', this.fechaMax)
    console.log('FECHAS: ' + this.param)
    this.http.get(`http://localhost:8080/gestion/facturacion`, {params: this.param}).subscribe({
        next: data => {
        // Global saca pormenorizada por nutri entre fechas
        this.facturacionGlobal = data
        this.dataSource = new MatTableDataSource(this.facturacionGlobal)
        console.log('AAA: ' + this.dataSource)
        console.log('GLOBALFECHAS', JSON.stringify(this.facturacionGlobal))
            },
            error: err => console.log("ERROR: ", err) 
     })
  }
  }

  




