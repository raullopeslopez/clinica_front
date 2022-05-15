import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Nutricionista } from 'src/app/interfaces/nutricionista';
import { NutricionistaService } from 'src/app/services/nutricionista.service';

@Component({
  selector: 'app-add-nutricionista',
  templateUrl: './add-nutricionista.component.html',
  styleUrls: ['./add-nutricionista.component.css']
})
export class AddNutricionistaComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, 
              private _nutricionistaService: NutricionistaService,
              private router: Router,
              private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      nutricionista: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

 /* addNutricionista() {
    const nutricionista: Nutricionista = {
      id_nutricionista: this.form.value.nutricionista,
      nombre: this.form.value.nombre,
      apellidos: this.form.value.apellido,
      fecha_alta: this.form.value.fecha_alta,
      dni: this.form.value.dni,
      telefono: this.form.value.telefono,
      sueldo: this.form.value.sueldo,
    }

    this._nutricionistaService.addNutricionista(nutricionista);
    this.router.navigate(['/dashboard/nutricionistas'])

    this._snackBar.open('Nutricionista añadido con éxito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }*/
}
