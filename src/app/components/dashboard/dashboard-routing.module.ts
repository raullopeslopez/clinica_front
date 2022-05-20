import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddConsultaComponent } from './consultas/add-consulta/add-consulta.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { DashboardComponent } from './dashboard.component';
import { AddFacturaComponent } from './facturacion/add-factura/add-factura.component';
import { FacturacionNutricionistaMensualComponent } from './facturacion/facturacion-nutricionista-mensual/facturacion-nutricionista-mensual.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { InicioComponent } from './inicio/inicio.component';
import { AddNutricionistaComponent } from './nutricionista/add-nutricionista/add-nutricionista.component';
import { DetailNutricionistaComponent } from './nutricionista/detail-nutricionista/detail-nutricionista.component';
<<<<<<< HEAD
import { EditNutricionistaComponent } from './nutricionista/edit-nutricionista/edit-nutricionista.component';
=======
<<<<<<< HEAD
import { EditNutricionistaComponent } from './nutricionista/edit-nutricionista/edit-nutricionista.component';
=======
>>>>>>> d692c596356868c2e7493ab63bd6a840fa45bad2
>>>>>>> 60e95e9b6e9c63591b124d480fbad0747fb0efc2

import { NutricionistaComponent } from './nutricionista/nutricionista.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children:
  [
    { path:'', component:InicioComponent},
    { path:'consultas', component: ConsultasComponent},
    { path:'facturacion', component: FacturacionComponent},
    { path:'nutricionistas', component:NutricionistaComponent},
    { path:'add-nutricionista', component:AddNutricionistaComponent},
    { path:'detail-nutricionista/:idNutricionista', component:DetailNutricionistaComponent},
<<<<<<< HEAD
    { path:'edit-nutricionista/:idNutricionista', component:EditNutricionistaComponent},
    { path:'add-consulta', component:AddConsultaComponent},
    { path:'add-factura', component:AddFacturaComponent},
    { path:'facturacion-nutricionista-mensual/:idNutricionista', component:FacturacionNutricionistaMensualComponent},
=======
<<<<<<< HEAD
    { path:'edit-nutricionista/:idNutricionista', component:EditNutricionistaComponent},
=======
>>>>>>> d692c596356868c2e7493ab63bd6a840fa45bad2
    { path:'add-consulta', component:AddConsultaComponent},
    { path:'add-factura', component:AddFacturaComponent},
    { path:'facturacion-nutricionista-mensual', component:FacturacionNutricionistaMensualComponent},
>>>>>>> 60e95e9b6e9c63591b124d480fbad0747fb0efc2
  ]
 }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
