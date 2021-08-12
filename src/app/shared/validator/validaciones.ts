import { FormControl } from "@angular/forms";

//creamos una propiedad para la validacion o las directivas para el pattern
//seponen dos entre parentecis con un espacio para nombre y apellido que sea dela a la z + para los demas letras
//solo se llama por el nombre con este caso seria y exportarlo de path 
//nombreApellidoPattern
export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern         : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  //creando metodo para directivas 
export const noPuedesSerMario64 = (control: FormControl) =>{
    const valor:string = control.value?.trim().toLowerCase();
    if(valor === 'mario64'){
      //return error
      return{
        noMario64:  true
      }
    }
    //null es que todo esta bien
    return null;
  }