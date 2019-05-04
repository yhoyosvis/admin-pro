import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { SubirArchivoService } from '../../servicios/subirArchivo/subir-archivo.service';
import { ModalSubirService } from './modal-subir.service';

@Component({
  selector: 'app-modal-subir',
  templateUrl: './modal-subir.component.html',
  styles: []
})
export class ModalSubirComponent implements OnInit {


  imagenSubir: File;
  imagenTemp: string;
  constructor( public _subirArchivoServicio: SubirArchivoService, public _modalSubirServicio: ModalSubirService) {  
  }

  ngOnInit() {
  }

  subirImagen() {
    this._subirArchivoServicio.subirArchivo(this.imagenSubir, this._modalSubirServicio.tipo, this._modalSubirServicio.id)
      .then(resp => {
       
        
        this._modalSubirServicio.notificacion.emit(resp);
       this.cerrarModal();

      })
      .catch(err => {
        console.log('error en la carga .....', err);
        
      })
  }

  cerrarModal() {
    this.imagenTemp = null;
    this.imagenSubir = null;

    this._modalSubirServicio.ocultarModal();
  }

  seleccionImage(archivo: File){

    if(!archivo){
      this.imagenSubir = null;
      return;
    }
    this.imagenSubir = archivo;
    console.log(archivo);
    
    if(archivo.type.indexOf('image')< 0){
      Swal.fire('Solo imagenes', 'el archivo seleccionado no es una imagen', 'error')
      this.imagenSubir = null;
      return;
    }
    this.imagenSubir = archivo;
    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => this.imagenTemp = reader.result.toString();
  }


}
