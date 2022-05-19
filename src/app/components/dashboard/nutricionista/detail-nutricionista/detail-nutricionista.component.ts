import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute} from '@angular/router';
import { Nutricionista } from 'src/app/models/nutricionista';

=======
import { ActivatedRoute} from '@angular/router';
import { Nutricionista } from 'src/app/interfaces/nutricionista';
>>>>>>> d692c596356868c2e7493ab63bd6a840fa45bad2
import { NutricionistaService } from 'src/app/services/nutricionista.service';

@Component({
  selector: 'app-detail-nutricionista',
  templateUrl: './detail-nutricionista.component.html',
  styleUrls: ['./detail-nutricionista.component.css']
})
export class DetailNutricionistaComponent implements OnInit {
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

}
