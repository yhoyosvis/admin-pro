import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
   @Input() leyenda: string = " leyenda";
   @Input() porcentaje: number = 50;
   @ViewChild('txt') txt: ElementRef;
   @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onChange(nuevoValor) {

    //let element: any = document.getElementsByName('porcentaje')[0];
    

    if(nuevoValor >= 100){
      this.porcentaje = 100;
    }else if(nuevoValor <= 0) {
      this.porcentaje = 0;
    }else{
      this.porcentaje = nuevoValor;
    }
    this.txt.nativeElement.value = this.porcentaje

    this.cambioValor.emit( this.porcentaje );
  }

  cambiarValor(valor){

    if(this.porcentaje >= 100 && valor > 0 ){
      this.porcentaje = 100
      return;
    }

    if(this.porcentaje <= 0 && valor < 0){
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + valor;
    this.cambioValor.emit( this.porcentaje ) ;
  }

}
