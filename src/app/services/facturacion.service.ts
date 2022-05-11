import { Injectable } from '@angular/core';
import { Facturacion } from '../interfaces/facturacion';

@Injectable({
  providedIn: 'root'
})
export class FacturacionService {

  listFacturas: Facturacion[] = [
    {factura: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "M"},
    {factura: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "M"},
    {factura: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "M"},
    {factura: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "M"},
    {factura: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "M"},
    {factura: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "M"},
    {factura: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "M"},
    {factura: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "F"},
    {factura: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "F"},

  ];
  constructor() { }

  getFacturacion() {
    return this.listFacturas.slice();
  }

  eliminarFactura(index: number) {
    this.listFacturas.splice(index, 1);
  }

  addFactura(factura: Facturacion) {
    this.listFacturas.unshift(factura);
  }
}
