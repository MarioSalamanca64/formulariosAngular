import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { CustomMinDirectives } from './directives/custom-min.directive';


@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent,
    
    CustomMinDirectives
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    //Se instala el modulo para los formulario de angulars/forms
    FormsModule
  ]
})
export class TemplateModule { }
