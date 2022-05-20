import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MatTableDataSource } from '@angular/material/table';
=======
>>>>>>> 60e95e9b6e9c63591b124d480fbad0747fb0efc2
import { FacturacionService } from 'src/app/services/facturacion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

<<<<<<< HEAD
  facturacionMensual: any;
  facturacionDiaria: any;


  displayedColumns: string[] = [
    'nutricionista',
    'minutos_trabajados',
    'facturacion_bruta',
    'facturacion_neta',
    'facturacion_bruta_hora',
    'facturacion_neta_hora',
    'numero_consultas'];

  dataSource!: MatTableDataSource<any>;
  dataSourceDiario!: MatTableDataSource<any>;

=======

  facturacionMensual: any;
  facturacionDiaria: any;
>>>>>>> 60e95e9b6e9c63591b124d480fbad0747fb0efc2
  constructor( private facturaService: FacturacionService) { }

  ngOnInit(): void {
    this.cargarFacturacionMensual();
    this.cargarFacturacionDiaria();
  }

  cargarFacturacionMensual() { 
    this.facturaService.getFacturacionMensual().subscribe ({
      next: data => {
        this.facturacionMensual = data
<<<<<<< HEAD
        this.dataSource = new MatTableDataSource(this.facturacionMensual)
        console.log('MENSUAL: ' + JSON.stringify(this.facturacionMensual)) 
=======
       console.log('MENSUAL: ' + JSON.stringify(this.facturacionMensual)) 
>>>>>>> 60e95e9b6e9c63591b124d480fbad0747fb0efc2
     },
      error: err => console.log("ERROR: ", err) 
    })
 }

 cargarFacturacionDiaria() { 
  this.facturaService.getFacturacionDiaria().subscribe ({
    next: data => {
      this.facturacionDiaria = data
<<<<<<< HEAD
      this.dataSourceDiario = new MatTableDataSource(this.facturacionDiaria)
=======
>>>>>>> 60e95e9b6e9c63591b124d480fbad0747fb0efc2
      console.log('DIARIA', JSON.stringify(this.facturacionDiaria))
   },
    error: err => console.log("ERROR: ", err) 
  })
}

}
