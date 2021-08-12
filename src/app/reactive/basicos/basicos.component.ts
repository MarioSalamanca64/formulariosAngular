import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

    // cargar todo para el formulario reactivo

  // aqui se crea un objeto con el valor del campo para darle un valor
  // 'nombre': new FormControl('RTX 4080TI')
  // miFormulario: FormGroup = new FormGroup({
  //   nombre     : new FormControl('RTX 4080TI'),
  //   precio     : new FormControl(1500),
  //   existencias: new FormControl(5)
  //   })

  // inyectar el formbuilder es un objeto
  // this.fb.group 
  //cargar validators de angular forms
  //Validators.required
  miFormulario:FormGroup = this.fb.group({
    nombre     : [ , [Validators.required, Validators.minLength(3)]],
    precio     : [ , [Validators.required,Validators.min(0)]],
    existencias: [ , [Validators.required,Validators.min(0)]],
  })

  // cargar formbuilder para que nuestro formulario paresca mas un objeto de javascript y no tenga los new
  constructor(private fb:FormBuilder) { }
// Estableser un valor por defecto en el formulario
// si no viene con una propiedad de formulario y falta una habra un error solo en setVlue
//si no se usa return en ese si lo hacepta
  ngOnInit(){
    this.miFormulario.setValue({
      nombre: 'TRX 4080TI',
      precio: 1600,
      existencias: 10
    })
  }


  //directivas el campo que estas mandando ala funcion es el que usas para directivas
  campoNoEsValido( campo:string){
    return this.miFormulario.controls[campo].errors 
            && this.miFormulario.controls[campo].touched;
  }

  guardar(){
    //si el formulario no es valido no se manda nada
    if( this.miFormulario.invalid ){
      //con esto tocara todo los campos para mostrar lo errores
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    //limpia los cambios al guardar los datos
    this.miFormulario.reset();
  }

  //que es sincrno y asincrono

  
}
