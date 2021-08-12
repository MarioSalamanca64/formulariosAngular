import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
//agregar el AsyncValidator 
//EN ESTE CASO SOLO SE PONE ASI PORQUE DEPENDE DEL HTTP
export class EmailVlidatorService implements AsyncValidator{

  constructor(private http: HttpClient ) { }


  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    console.log(email);
    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
                                  //trasformar el obserbable en lo que queramos
                                .pipe(
                                  // hacer que tarde 3sec para la respuesta
                                  delay(3000),
                                  //resp siempre sera un areglo si hay un areglo que exista habra un error
                                  //si gresa un areglo basio sifnifica que esta bien 
                                  map( resp => {
                                    return (resp.length === 0 )
                                       ?null
                                       :{emailTomado: true}
                                  })
                                )
  }
}
