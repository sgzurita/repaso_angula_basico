import { Component } from "@angular/core";

@Component({
    selector:"app-contador",
    template:`
    <title>{{tittle}}</title>
    <span>{{contador}}</span>
    <button (click)="acumular(-base)">acumular -{{base}}</button>`
})
export class ContadorComponent{

    tittle:string="contador";    
    contador:number=10;
    base:number=5;
    acumular(base:number){
        this.contador+=base;

    }

}