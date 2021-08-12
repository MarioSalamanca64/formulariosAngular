import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

  miFormulario:FormGroup = this.fb.group({
    nombre: [ '',[Validators.required, Validators.minLength(3)]],
    //hay que hacer que sea un areglo no un nuevo elemento 
    //[] se usa solo en el FormBuilder
    favoritos: this.fb.array([
      ['Metal Gear',Validators.required],
      ['Death Stranding',Validators.required],
    ], Validators.required )
  });

  //crear un control aparte que estaria fuera del miformulario para egrgar los nuevos a ellas
  nuevoFavorito: FormControl = this.fb.control('',Validators.required)


  //get para obtener favoritos en el segundo get pones lo que quieras buscar en este caso favoritos que es el array
  //ayudar al typescript para que sepa que es un array form
  //as FormArray
  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }


  constructor(private fb:FormBuilder) { }

  campoNoEsValido(campo:string){
      return this.miFormulario.controls[campo].errors 
      && this.miFormulario.controls[campo].touched
  }

  agregarFavorito(){
    //si no es valido no que no siga y no retorne nada
    if(this.nuevoFavorito.invalid){return;}

    //agregar un nuevo elemento al array de fomulario usamos otra vez el get
    //para por que ningun campo quede basio de los nuevos que emos echo y siempre tengan algo
    //this.favoritosArr.push(new FormControl(this.nuevoFavorito.value ,Validators.required ));
    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value ,Validators.required));
    //this.favoritosArr.push(this.fb);

    //aldar enter para que se limpie lo escrito
    this.nuevoFavorito.reset();
  }

  //en este caso se pone el argumento de ngfor que creo los i 
  //y para crear la accion borra ya que se trasforma el elemento se usa 
  // removeAt(i)
  borrar(i: number){
    this.favoritosArr.removeAt(i);
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    //imprimir valor de formulario
    console.log(this.miFormulario.value)
  }


}
