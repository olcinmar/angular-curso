import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{

    nombre : string= "Ironman";
    edad   : number= 45;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
        //this.nombre + '-' + this.edad.toString();            
    }
    cambiarHeroe():void{
        this.nombre="Spiderman";
    }

    cambiarEdad():void{
        console.log("heeey");
        this.edad=25;
    }
    cambiarTodo():void{
        this.edad=25;
        this.nombre="Spiderman"
    }

}


