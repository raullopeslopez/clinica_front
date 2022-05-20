import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
=======
import { FacturacionNutricionista } from 'src/app/models/facturacion-nutricionista';
>>>>>>> 60e95e9b6e9c63591b124d480fbad0747fb0efc2

@Component({
  selector: 'app-facturacion-nutricionista-mensual',
  templateUrl: './facturacion-nutricionista-mensual.component.html',
  styleUrls: ['./facturacion-nutricionista-mensual.component.css']
})
export class FacturacionNutricionistaMensualComponent implements OnInit {

<<<<<<< HEAD
  idNutricionista : number
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
    'numero_consultas'
  ];


  constructor(private http : HttpClient,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idNutricionista = this.route.snapshot.params['idNutricionista'];
  }

  getFacturacionFechasNutricionista (fMin: any, fMax:any, idNu:any) {
    this.fechaMin = fMin
    this.fechaMax = fMax
    this.idNutricionista = idNu
    this.param = new HttpParams()
    .set('fechaMin', this.fechaMin)
    .set('fechaMax', this.fechaMax)
    
    console.log('FECHAS: ' + this.param)
    //this.http.get(`http://localhost:8080/nutricionistas/facturacion/${idNu}/mensual`, {params: this.param}).subscribe({
    this.http.get(`http://localhost:8080/gestion/facturacion/nutricionista/${idNu}/mensual`, {params: this.param}).subscribe({
        next: data => {
        // Global saca pormenorizada por nutri entre fechas
        console.log('aaa ' + data)
        this.dataSource = new MatTableDataSource([data])
            },
            error: err => console.log("ERROR: ", err) 
     })
  }



    // let fxmin = '1900-01-01'
    // let fxmax = '2023-01-01'
    // let params = new HttpParams()
    // .set('fechaMin', fxmin)
    // .set('fechaMax', fxmax)

    // this.http.get(`http://localhost:8080/nutricionistas/facturacion/1/mensual`, {params: params}).subscribe({
    //       next: data => {
    //         // Te saca entre las fechas seleccionadas y por el nutri seleccionado
    //         this.listFacturas = data
    //         this.listFacturas = Array.of(this.listFacturas)
    //         console.log('XXX',data)
    //       },
    //       error: err => console.log("ERROR: ", err) 
    // })

  
=======
  listFacturas: any = {}

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.cargarFacturacionNutricionistaMensual();
  }

  cargarFacturacionNutricionistaMensual() {
    let fxmin = '1900-01-01'
    let fxmax = '2023-01-01'
    let params = new HttpParams()
    .set('fechaMin', fxmin)
    .set('fechaMax', fxmax)

    this.http.get(`http://localhost:8080/nutricionistas/facturacion/1/mensual`, {params: params}).subscribe({
          next: data => {
            // Te saca entre las fechas seleccionadas y por el nutri seleccionado
            this.listFacturas = data
            this.listFacturas = Array.of(this.listFacturas)
            console.log('XXX',data)
          },
          error: err => console.log("ERROR: ", err) 
    })

  }
>>>>>>> 60e95e9b6e9c63591b124d480fbad0747fb0efc2

  

}
