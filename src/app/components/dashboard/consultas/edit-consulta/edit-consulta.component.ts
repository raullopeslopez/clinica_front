import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Consulta } from 'src/app/interfaces/consulta';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-edit-consulta',
  templateUrl: './edit-consulta.component.html',
  styleUrls: ['./edit-consulta.component.css'],
})
export class EditConsultaComponent implements OnInit {
  idConsulta!: number;
  consulta!: Consulta;
  form!: FormGroup;
  consultaModificada!: Consulta;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private _consultaService: ConsultaService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.idConsulta = this.route.snapshot.params['id'];
    console.log(this.idConsulta);
    this.form = this.fb.group({
      porcentajeVariable: [''],
      duracion: [''],
      fechaConsulta: [''],
      precio: [''],
    });
  }

  editConsulta() {
    console.log(this.form.value);
    this._consultaService.getConsultasId(this.idConsulta).subscribe({});

    console.log(this.consultaModificada);

    this._consultaService.putConsulta(this.consultaModificada).subscribe({
      next: (data) => {
        console.log('CONSULTA MODIFICADA: ' + JSON.stringify(data));
        this.router.navigate(['/dashboard/consultas']);
      },
      error: (err) => console.log('ERROR: ', err),
    });

    this.snackBar.open('Consulta editada con éxito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
