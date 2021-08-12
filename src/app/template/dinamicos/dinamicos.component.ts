import { Component,  ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre:string;
  favoritos: Favorito[];
}

interface Favorito{
  id: number;
  nombre:string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {
  // Esparte de actualizar los nombres
  nuevoJuego:string = '';
  //interface 
  persona:Persona ={
    nombre: 'Mario',
    favoritos: [
      {id: 1, nombre:'Metal Gear'},
      {id: 2, nombre:'DeathStranding'}
    ]
  }
  // seagrega uno mas al array de todos lo juegos
  agregarJuego(){
    const nuevoFavorito: Favorito ={
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego 
    }
    // sprait es para no mandarle ninguna referencia al objeto {...}
    this.persona.favoritos.push( {... nuevoFavorito} );
    this.nuevoJuego = '';
  }

  //eliminar elmento
  eliminar( index: number ){
    this.persona.favoritos.splice(index, 1)
  }



  //directivas

  @ViewChild('miFormulario') miFormulario!:NgForm;
  constructor() { }

  nombreValido(){
    return this.miFormulario?.controls.nombre?.invalid
    && this.miFormulario?.controls.nombre?.touched;
  }
  guardar(){
    console.log('Formulario posteado');
  }
}
