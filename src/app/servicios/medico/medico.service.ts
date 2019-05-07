import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/configuraciones/configuracion';
import { map } from 'rxjs/operators';
import { UsuarioService } from '../usuario/usuario.service';
import Swal from 'sweetalert2';
import { Medico } from 'src/app/modelos/medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  totalMedicos: number = 0;
  constructor(
    public http: HttpClient,
    public _usuarioServicio: UsuarioService
  ) { }


  cargarMedicos(){
    let url = URL_SERVICIOS + '/medico'

    return this.http.get(url)
      .pipe(
        map((resp:any) => {
          this.totalMedicos = resp.total;
          return resp.medicos;
        })
      )
  }

  buscarMedico(termino: string){
    let url = URL_SERVICIOS + '/busqueda/coleccion/medicos/' + termino;

    return this.http.get(url)
      .pipe(
        map((resp:any) => resp.medicos )
      )
   }

   borrarMedico(id:string){
    let url = URL_SERVICIOS + '/medico/' + id;
    url += '?token=' + this._usuarioServicio.token

    return this.http.delete(url)
      .pipe(
        map(resp => {
          Swal.fire('medico borrado', 'exitos', 'success')
          return resp;
        })
      )
   }

   guardarMedico(medico: Medico){
    let url = URL_SERVICIOS + '/medico'

    if(medico._id){
      url += '/' + medico._id
      url += '?token=' + this._usuarioServicio.token

      return this.http.put(url, medico)
        .pipe(
          map((resp:any) => {
            Swal.fire('medico actualizado', 'exitos', 'success')
            return resp.medico
          })
        )
     } else {
       url += '?token=' + this._usuarioServicio.token
       return this.http.post(url, medico)
         .pipe(
           map((resp: any) => {
             Swal.fire('medico creado', 'exitos', 'success')

             return resp.medico;
           })
         );
     }
   }


   cargarMedico(id: string){
    let url = URL_SERVICIOS + '/medico/' +id;

    return this.http.get(url)
      .pipe(
        map((resp:any) => resp.medico)
      )

   }
}
