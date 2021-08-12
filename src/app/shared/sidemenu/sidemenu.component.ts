import { Component } from '@angular/core';
import { TemplateModule } from '../../template/template.module';

interface MenuItem{
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [`
    li{
      cursor:pointer;
    }
  `]
})

export class SidemenuComponent {

  templateMenu: MenuItem [] =[
    //deben hacer mach con los nombres de los enrutados
    {
      texto: 'Basicos',
      ruta: './template/basicos'
    },
    {
      texto: 'Dinamicos',
      ruta: './template/dinamicos'
    },
    {
      texto: 'Swiches',
      ruta: './template/switches'
    },
  ];

  reactiveMenu: MenuItem [] =[
    //deben hacer mach con los nombres de los enrutados
    {
      texto: 'Basicos',
      ruta: './reactive/basicos'
    },
    {
      texto: 'Dinamicos',
      ruta: './reactive/dinamicos'
    },
    {
      texto: 'Swiches',
      ruta: './reactive/switches'
    },
  ];

  authMenu: MenuItem [] =[
    //deben hacer mach con los nombres de los enrutados
    {
      texto: 'Registro',
      ruta: './auth/registro'
    },
    {
      texto: 'Login',
      ruta: './auth/login'
    },
  ]

  

}
