import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscripcion : Subscription;

  constructor() {
     this.subscripcion = this.regresaObservable()
    .subscribe( 
      num => console.log('subs', num),
      error => console.error('error en el obs', error),
      () => console.log('El observador termino')
    );
   }
  ngOnInit() {
  }

  regresaObservable():Observable<any> {
   return new Observable(observer => {
      let cont = 0;
      let intervalo = setInterval( () => {
        cont += 1;

        const salida = {
          valor : cont
        }

        observer.next(salida);
        if (cont === 100) {
          clearInterval(intervalo);
          observer.complete();
        } 
  
      }, 1000);
    }).pipe(
      map((resp:any) => {
        return resp.valor;
      }),
      filter( (resp, index) => {
        if((resp % 2) === 1){
          return true;
        }else{
          return false;
        }
      })
    )
  }

  ngOnDestroy(){
    console.log('se va cerrar')
    this.subscripcion.unsubscribe();
  }
}
