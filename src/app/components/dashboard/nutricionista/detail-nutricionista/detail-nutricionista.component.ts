import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Nutricionista } from 'src/app/models/nutricionista';
import { FacturacionService } from 'src/app/services/facturacion.service';

=======
<<<<<<< HEAD
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute} from '@angular/router';
import { Nutricionista } from 'src/app/models/nutricionista';

=======
import { ActivatedRoute} from '@angular/router';
import { Nutricionista } from 'src/app/interfaces/nutricionista';
>>>>>>> d692c596356868c2e7493ab63bd6a840fa45bad2
>>>>>>> 60e95e9b6e9c63591b124d480fbad0747fb0efc2
import { NutricionistaService } from 'src/app/services/nutricionista.service';

@Component({
  selector: 'app-detail-nutricionista',
  templateUrl: './detail-nutricionista.component.html',
  styleUrls: ['./detail-nutricionista.component.css']
})
export class DetailNutricionistaComponent implements OnInit {
<<<<<<< HEAD

  idNutricionista: number;
  selectNutricionista: any[] = []
  facturacionNutricionista: any[] = []

  displayedColumns: string[] = ['idNutricionista',
    'nombre',
    'apellidos',
    'fechaNacimiento',
    'fechaAlta',
    'activo',
    'telefono',
    'dni',
    'sueldo',
    'facturacion'];
  dataSource!: MatTableDataSource<any>;

  dataSourceFacturacion!: MatTableDataSource<any>;
  displayedColumnsFacturacion: string[] = [
    'nutricionista',
    'minutos_trabajados',
    'facturacion_bruta',
    'facturacion_neta',
    'facturacion_bruta_hora',
    'facturacion_neta_hora',
    'numero_consultas'];

  constructor(private nutricionistaService: NutricionistaService,
    private facturacionService: FacturacionService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.idNutricionista = this.route.snapshot.params['idNutricionista'];
    this.cargarNutricionista();
    this.cargarFacturacionNutricionista();
  }

  cargarNutricionista() {
    this.nutricionistaService.getNutricionista(this.idNutricionista).subscribe({
      next: data => {
        this.selectNutricionista.push(data)
        this.dataSource = new MatTableDataSource(this.selectNutricionista)
        console.log('DATA: ' + data)
        console.log('DETALLE NUTRICIONISTA: ' + JSON.stringify(this.selectNutricionista))
      },
      error: err => console.log("ERROR: ", err)
    })
  }

  cargarFacturacionNutricionista() {
    this.facturacionService.getFacturacionNutricionista(this.idNutricionista).subscribe({
      next: response => {
        this.facturacionNutricionista.push(response)
        this.dataSourceFacturacion = new MatTableDataSource(this.facturacionNutricionista)
        console.log('FACTURACION NUTRICIONISTA: ' + JSON.stringify(this.facturacionNutricionista))
      },
      error: err => console.log("ERROR: ", err)
    })
  }

  /* cargarFacturacionNutricionista() {
    //let params = new HttpParams()
    this.http.get(`http://localhost:8080/nutricionistas/facturacion/1`).subscribe({
          next: response => {
            // Tiene en cuenta que la facturacion es del mes del 1 hasta el dia actual
            this.facturacionNutricionista = response
            this.dataSource = new MatTableDataSource(this.facturacionNutricionista)
            //this.facturacionNutricionista = Array.of(this.facturacionNutricionista)
            console.log('NUTRICIONISTA', JSON.stringify(this.facturacionNutricionista))
          },
          error: err => console.log("ERROR: ", err) 
    })
  }*/
=======
<<<<<<< HEAD

  idNutricionista: number;
  selectNutricionista: any[] =[]


  displayedColumns: string[] = ['idNutricionista',
                                'nombre', 
                                'apellidos',
                                'fechaNacimiento', 
                                'fechaAlta', 
                                'activo', 
                                'telefono', 
                                'dni',
                                'sueldo'];

  dataSource!: MatTableDataSource<any>;                              
=======
  
  idNutricionista: Number;
  selectNutricionista: Nutricionista[] = [];

>>>>>>> d692c596356868c2e7493ab63bd6a840fa45bad2

  constructor(private nutricionistaService: NutricionistaService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
  this.idNutricionista = this.route.snapshot.params ['idNutricionista'];
<<<<<<< HEAD
    this.cargarNutricionista();
  }

     cargarNutricionista() { 
       this.nutricionistaService.getNutricionista(this.idNutricionista).subscribe ({
         next: data => {this.selectNutricionista.push(data)
          this.dataSource = new MatTableDataSource(this.selectNutricionista)
         console.log('DATA: ' + data)
         console.log('DETALLE NUTRICIONISTA: ' + JSON.stringify(this.selectNutricionista))
         },
         error: err => console.log("ERROR: ", err) 
       })
     }

  //  cargarNutricionista () {
  //    this.nutricionistaService
  //      .getNutricionista(this.idNutricionista)
  //      .subscribe((resp: any) => {
  //        this.selectNutricionista = resp;
  //        this.dataSource = new MatTableDataSource(resp);
  //        console.log(this.selectNutricionista);
  //      });
  //  }
=======
  console.log('ID NUTRICIONISTA: ' + this.idNutricionista)
    this.cargarNutricionista();
  }

   cargarNutricionista() { 
     this.nutricionistaService.getNutricionista(this.idNutricionista).subscribe ({
       next: data => {this.selectNutricionista.push(data)
       console.log('DATA: ' + data)
       console.log('DETALLE NUTRICIONISTA: ' + JSON.stringify(this.selectNutricionista))
       },
       error: err => console.log("ERROR: ", err) 
     })
   }
>>>>>>> d692c596356868c2e7493ab63bd6a840fa45bad2

>>>>>>> 60e95e9b6e9c63591b124d480fbad0747fb0efc2
}
