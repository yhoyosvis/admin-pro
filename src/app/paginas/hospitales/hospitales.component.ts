import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/modelos/hospital.model';
import { HospitalService } from 'src/app/servicios/index.service';
import Swal, { SweetAlertResult } from 'sweetalert2';
import { SubirArchivoService } from '../../servicios/subirArchivo/subir-archivo.service';
import { ModalSubirService } from '../../componentesP/modal-subir/modal-subir.service';


@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {
  hospitales: Hospital[] = [];
  constructor( public _hospitalServicio: HospitalService,
              public _subirArchivoServicio: SubirArchivoService,
                public _modalSubirServicio : ModalSubirService) { }

  ngOnInit() {
    this.cargarHospitales();
    this._modalSubirServicio.notificacion
      .subscribe(() => this.cargarHospitales());
  }

  buscarHospital(termino: string){

    if(termino.length <= 0){
      this.cargarHospitales();
      return;
    }
    this._hospitalServicio.buscarHospital(termino)
    .subscribe( hospitales => this.hospitales = hospitales)
  }

  cargarHospitales() {
    this._hospitalServicio.cargarHospitales()
        .subscribe(hospitales =>{
          this.hospitales = hospitales
        })
  }

  guardarHospital(hospital: Hospital){
    this._hospitalServicio.actualizarHospital( hospital)
        .subscribe();
  }

  borrarHospital(hospital: Hospital){
    this._hospitalServicio.borrarHospital(hospital._id)
        .subscribe(() => this.cargarHospitales() );
  }

  crearHospital(){
    Swal.fire({
      title: 'Crear hospital',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Crear',
      showLoaderOnConfirm: true,
    }).then( (valor: SweetAlertResult) => {

          if(!valor || valor.value.length === 0){
            return
          }

          this._hospitalServicio.crearHospital(valor.value)
              .subscribe( () => this.cargarHospitales());
          
    })
  }

  acutalizarImagen(hospital: Hospital){
    this._modalSubirServicio.mostrarModal('hospitales', hospital._id)
  }

}
