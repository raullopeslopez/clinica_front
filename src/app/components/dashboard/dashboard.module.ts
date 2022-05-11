import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModulesModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NutricionistaComponent } from './nutricionista/nutricionista.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddNutricionistaComponent } from './nutricionista/add-nutricionista/add-nutricionista.component';
import { AddConsultaComponent } from './consultas/add-consulta/add-consulta.component';
import { AddFacturaComponent } from './facturacion/add-factura/add-factura.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NutricionistaComponent,
    FacturacionComponent,
    ConsultasComponent,
    NavbarComponent,
    AddNutricionistaComponent,
    AddConsultaComponent,
    AddFacturaComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModulesModule
  ]
})
export class DashboardModule { }
