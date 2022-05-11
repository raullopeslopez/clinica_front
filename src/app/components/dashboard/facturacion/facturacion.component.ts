import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Facturacion } from 'src/app/interfaces/facturacion';
import { FacturacionService } from 'src/app/services/facturacion.service';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent implements OnInit {

  listFacturas: Facturacion[] = [];

  displayedColumns: string[] = ['factura','nombre', 'apellido', 'edad', 'sexo', 'opciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _facturaService: FacturacionService, private _snackBar: MatSnackBar) { }

  

  ngOnInit(): void {
    this.cargarFacturas();
  }

  cargarFacturas() {
    this.listFacturas = this._facturaService.getFacturacion();
    this.dataSource = new MatTableDataSource(this.listFacturas);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  eliminarFactura(index: number) {
   console.log(index);

   this._facturaService.eliminarFactura(index);
   this.cargarFacturas();

   this._snackBar.open('Factura eliminada con éxito', '', {
    duration: 1500,
    horizontalPosition: 'center',
    verticalPosition: 'bottom'
  })
  }
}
