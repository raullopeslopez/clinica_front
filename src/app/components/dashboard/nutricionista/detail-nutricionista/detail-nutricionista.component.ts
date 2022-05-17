import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Nutricionista } from 'src/app/interfaces/nutricionista';
import { NutricionistaService } from 'src/app/services/nutricionista.service';

@Component({
  selector: 'app-detail-nutricionista',
  templateUrl: './detail-nutricionista.component.html',
  styleUrls: ['./detail-nutricionista.component.css']
})
export class DetailNutricionistaComponent implements OnInit {
  
  idNutricionista: Number;
  selectNutricionista: Nutricionista[] = [];


  constructor(private nutricionistaService: NutricionistaService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
  this.idNutricionista = this.route.snapshot.params ['idNutricionista'];
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

}
