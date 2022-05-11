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

  displayedColumns: string[] = ['nutricionista','nombre', 'apellido', 'edad', 'sexo', 'opciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _nutricionistaService: NutricionistaService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarNutricionistas();
  }

  cargarNutricionistas() {
    this.listNutricionistas = this._nutricionistaService.getNutricionista();
    this.dataSource = new MatTableDataSource(this.listNutricionistas);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  eliminarNutricionista(index: number) {
   console.log(index);

   this._nutricionistaService.eliminarNutricionista(index);
   this.cargarNutricionistas();

   this._snackBar.open('Nutricionista eliminado con éxito', '', {
    duration: 1500,
    horizontalPosition: 'center',
    verticalPosition: 'bottom'
  })
  }
}
