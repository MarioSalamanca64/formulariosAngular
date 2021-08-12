import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validators } from "@angular/forms";


@Directive({
    //que lo busque con mi palabra personalizada
    //y que use tanbien el ngModel
    selector:' [customMin] [ngModel]',
    //llamar servisios que hacen falalta para su funcionamiento
    providers: [{
        provide : NG_VALIDATORS,
        useExisting : CustomMinDirectives,
        multi: true
    }]
})
export class CustomMinDirectives implements Validators {
    //input para resivirlo del padre
    @Input() minimo!: number;

    constructor(){}

    //validater debe regresar algo siempre en este caso un null
    // sehace da riectiva de que debe ser menor a minimo que en este caso es 0 para que salga el error null sifnifica que no hay un error
    validate(  control : FormControl){
        const inputValue = control.value;
        return (inputValue < this.minimo )
                ? {'customMin': true}
                : null;
    }

    

}