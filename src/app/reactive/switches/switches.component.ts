import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {
  //formular el formulario
  miFormulario: FormGroup = this.fb.group({
    genero        : [ 'M', Validators.required],
    notificaciones: [true , Validators.required],
    //si tienes problemas con el condicional tru o boolean sepuede usar esta opcion es un metodo
    //.requiredTrue  tiene que ser true
    condiciones   : [false, Validators.requiredTrue]
  });


  //persona por separado 
  persona = {
    genero:'F',
    notificaciones: true,
  }
  



  constructor( private fb:FormBuilder) { }
  // Aqui colocariamso la informacion de la persona para implementarlo en el formulario
  //que reset quiete todos los datos y que los ponga los que persona tenga y que coincida
  //agregar alguna otra condicion despues 
  ngOnInit(){
    this.miFormulario.reset({
      ... this.persona,
      condiciones: true
    });
    //cambiar personas de forma reactiva osea en stream usando rxjs
    this.miFormulario.valueChanges.subscribe(form =>{
      console.log( form ) 
    })
    //para ver solo un campo del formulario
    this.miFormulario.get('condiciones')?.valueChanges.subscribe( newValue =>{
      console.log(newValue)
    })
    //para que esten sincronisados la persona y el formulario
    //extraer informacion que no me interesa 
    //destructurar el lo que mandas
    //...rest - es el resto del contendio y se almasena 
    this.miFormulario.valueChanges.subscribe( ({condiciones, ...restodeargumentos})=>{
      //primera forma 
      //delete form.condiciones;
      // segunda forma
      this.persona = restodeargumentos;
    });
    

  }

  guardar(){
    const formValue = {...this.miFormulario.value};
    // Eliminar un objeto del formulario que se manda en este caso son las condiciones
    delete formValue.condiciones;
    //este hace que cambien los valores de la persona al dar guardar
    this.persona = formValue;
    console.log(formValue);
  }



}
