import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { ConfiguracionesService } from '../../servicios/index.service';


@Component({
  selector: 'app-configuraciones-cuenta',
  templateUrl: './configuraciones-cuenta.component.html',
  styles: []
})
export class ConfiguracionesCuentaComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document, public _ajustes: ConfiguracionesService ) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema: string, link: any) {
    this.aplicarCheck(link)
    this._ajustes.aplicarTema(tema)

  }

  aplicarCheck(link: any){
    let selectores: any = document.getElementsByClassName('selector');
    for(let ref of selectores){
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocarCheck(){
    let selectores: any = document.getElementsByClassName('selector');
    let tema = this._ajustes.ajustes.tema;

     for(let ref of selectores){
      if(ref.getAttribute('data-theme') === tema){
        ref.classList.add('working');
        break;
      }
      }
  }
}
