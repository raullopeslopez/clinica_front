import { Nutricionista } from './nutricionista';
import { Bono } from './bono';
import { Cliente } from './cliente';

export class Consulta {
  idConsulta!: number;
  duracion!: number;
  fechaConsulta!: string;
  porcentajeVariable!: number;
  precio!: number;
  bono!: Bono;
  cliente!: Cliente;
  nutricionista!: Nutricionista;
}
