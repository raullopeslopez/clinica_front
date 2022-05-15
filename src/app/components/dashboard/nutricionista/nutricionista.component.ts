import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Nutricionista } from 'src/app/interfaces/nutricionista';
import { NutricionistaService } from 'src/app/services/nutricionista.service';

@Component({
  selector: 'app-nutricionista',
  templateUrl: './nutricionista.component.html',
  styleUrls: ['./nutricionista.component.css']
})

export class NutricionistaComponent implements OnInit {
  
  listNutricionistas: Nutricionista[] = [];
  displayedColumns: string[] = ['idNutricionista','nombre', 'apellidos', 'fechaAlta', 'dni'
                                ,'telefono', 'sueldo', 'opciones'];
  
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private nutricionistaService: NutricionistaService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarNutricionistas();
  }

  cargarNutricionistas() {
    this.nutricionistaService.getAllNutricionistas().subscribe (response => {
    this.listNutricionistas = response;
    this.dataSource = new MatTableDataSource(response)
    this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }
 /* eliminarNutricionista(index: number) {
   console.log(index);

   this.nutricionistaService.eliminarNutricionista(index);
   this.cargarNutricionistas();

   this._snackBar.open('Nutricionista eliminado con éxito', '', {
    duration: 1500,
    horizontalPosition: 'center',
    verticalPosition: 'bottom'
  })
  }*/
}
