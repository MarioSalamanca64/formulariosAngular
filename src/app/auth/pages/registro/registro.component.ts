import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailVlidatorService } from 'src/app/shared/validator/email-vlidator.service';

import { emailPattern, nombreApellidoPattern, noPuedesSerMario64 } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {
 



  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.pattern(this.validatorservices.nombreApellidoPattern)] ],
    email :['',[Validators.required, Validators.pattern(this.validatorservices.emailPattern)], [this.emailvalidator] ],
    //nodebes ejecutar el metodo con noPuedesSerMario64()
    username :['',[ Validators.required, this.validatorservices.noPuedesSerMario64] ],
    password :['',[ Validators.required,Validators.minLength(6) ] ],
    password2:['',[ Validators.required ] ],
  }, //son opciones que podemos mandar al FormGroup
  {
    //setiene que leer en tiempo real
     validators:[ this.validatorservices.camposiguales('password','password2') ]
  });

  //de los tres mensages de error
  get emailErrorMsg():string{
    //almasenamos todo lo que se encuentre ahi
    const errors = this.miFormulario.get('email')?.errors;
    if(errors?.required){
      return 'Email es obligatorio';
    }else if (errors?.pattern){
      return 'El valor no tiene formato de email';
    }else if (errors?.emailTomado){
      return 'El email ya existe'
    }


    return '';
  }


  constructor(private fb:FormBuilder,
              private validatorservices: ValidatorService,
              //inyecion de http
              private emailvalidator: EmailVlidatorService ) { }

  ngOnInit(): void {
    //estableser para no chocar con el formulario
    this.miFormulario.reset({
      nombre:'Mario Salamanca',
      email:'test1@test.com',
      username:'pinchallantas3000',
      password: '123456',
      password2: '123456'
    })

  }

  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid 
        && this.miFormulario.get(campo)?.touched;
  }
  //mas opciones alos errores ya q en email son 3
  // emailRequired(){
  //   return this.miFormulario.get('email')?.errors?.required
  //   && this.miFormulario.get('email')?.touched;
  // }
  // emailFormato(){
  //   return this.miFormulario.get('email')?.errors?.pattern
  //   && this.miFormulario.get('email')?.touched;
  // }
  // emailTomado(){
  //   return this.miFormulario.get('email')?.errors?.emailTomado
  //   && this.miFormulario.get('email')?.touched;
  // }


  submitFormulario(){
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }

}
