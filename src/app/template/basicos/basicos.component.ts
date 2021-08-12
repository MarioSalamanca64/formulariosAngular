import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  // espara que escuche una referencia local
  // se pone el ! para decirle que siempre regreara un valor ya que no existe ya que esta antes q el costructor

  @ViewChild('miFormulario') miFormulario!:NgForm;
  // para que tenga un valor cuando empieza el formulario se pondra en el ngModel
  initForm = {
    producto: 'RTX 4080ti',
    precio: 10,
    existencias: 10
  }
  constructor() { }

  ngOnInit(): void {
  }
  // *ngif 
  // se pone controls por que no tiene la propiedad producto despues producto que es el nombre y alfinal unapropiedad invalid
  // producto? es por que el formulario se hace pero esta propiedad no existe asi que mensiona que si no existe quesigacorriendo
  
  // el priemo que sea invalido y en este caso que solo sea tocado aparesera el span
  // miFormulario.controls.producto?.invalid

  // noterminava de inicializar controls por eso sepondria ? alfinal de miformulario ya que segiria ejecutando asta llegar asta ahi

  nombreValido():boolean{
    return this.miFormulario?.controls.producto?.invalid 
    && this.miFormulario?.controls.producto?.touched;
  }

  //ladirectiva value restringe ya que debe ser mallor a 0 para que funcione
  
  precioValido():boolean{
    return this.miFormulario?.controls.precio?.touched 
        && this.miFormulario?.controls.precio?.value < 0; 
  } 

  // viene de mi html de mi formulario
  //dices que es de tipo ngFOR Y INPORTAR DE ANGULAR/forms
  // guardar( miFormulario: NgForm) 
  guardar( ){
    // console.log(this.miFormulario.value);
    // console.log(this.miFormulario.valid);
    // console.log(this.miFormulario);
    console.log('Posteado correcto')
    // hay un objeto que hace que al darle guardar mande 0 dentro del reseteForm
    this.miFormulario.resetForm({
      producto:'algun otro producto',
      precio: 0,
      existencias: 0
    });
  

    }

  
}
