import { Injectable } from '@angular/core';
import { Nutricionista } from '../interfaces/nutricionista';

@Injectable({
  providedIn: 'root'
})
export class NutricionistaService {

  listNutricionistas: Nutricionista[] = [
    {nutricionista: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "M"},
    {nutricionista: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "M"},
    {nutricionista: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "M"},
    {nutricionista: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "M"},
    {nutricionista: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "M"},
    {nutricionista: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "M"},
    {nutricionista: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "M"},
    {nutricionista: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "F"},
    {nutricionista: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "F"},
    {nutricionista: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "M"},
    {nutricionista: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "M"},
    {nutricionista: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "M"},
    {nutricionista: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "M"},
    {nutricionista: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "M"},
  ];
  constructor() { }

  getNutricionista() {
    return this.listNutricionistas.slice();
  }

  eliminarNutricionista(index: number) {
    this.listNutricionistas.splice(index, 1);
  }

  addNutricionista(nutricionista: Nutricionista) {
    this.listNutricionistas.unshift(nutricionista);
  }
}
