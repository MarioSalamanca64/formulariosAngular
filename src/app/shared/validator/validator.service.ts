import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
//este es un servicio para tener todas las directivas aparte pues de esta forma podemos hacer inyeciones
//de otras dependecias
export class ValidatorService {

  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern         : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }
  //creando metodo para directivas 
  //aqui a;adimos el validatorErrors ya que es el tipo y agregar tanbien el null
  noPuedesSerMario64(control: FormControl):ValidationErrors | null{
    const valor:string = control.value?.trim().toLowerCase();
    if(valor === 'mario64'){
      //si es un error de este tipo si no es null
      return{
        noMario64:  true
      }
    }
    //null es que todo esta bien
    return null;
  }

camposiguales(campo1:string , campo2:string){
  //para quitar el error de obsoleto la raya enmedio 
  //formGroup hace referencia a todo el onjeto del formulario
  return ( formGroup:AbstractControl):ValidationErrors | null => {
    
   const pass1 = formGroup.get(campo1)?.value;
   const pass2 = formGroup.get(campo2)?.value;

   if(pass1 !== pass2){
     formGroup.get(campo2)?.setErrors({noIguales: true});
     return { noIguales: true}
   }

   //esto purgaria cual quier error que tenga asi que cuidado
   formGroup.get(campo2)?.setErrors(null);
    return null
  }

}

}


