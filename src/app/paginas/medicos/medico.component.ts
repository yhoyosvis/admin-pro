import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MedicoService } from '../../servicios/medico/medico.service';
import { Hospital } from '../../modelos/hospital.model';
import { HospitalService } from '../../servicios/hospital/hospital.service';
import { subscribeOn } from 'rxjs/operators';
import { Medico } from 'src/app/modelos/medico.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalSubirService } from '../../componentesP/modal-subir/modal-subir.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent implements OnInit {
  hospitales : Hospital [] = [];
  medico: Medico = new Medico('','','','','');
  hospital: Hospital = new Hospital('');


  constructor(
    public _medicoServicio: MedicoService,
    public _hospitalServicio: HospitalService,
    public router: Router,
    public activateRoute: ActivatedRoute,
    public _modalSubirServicio: ModalSubirService
  ) { 

    activateRoute.params.subscribe(params => {
      let id  = params['id'];
      if(id !== 'nuevo'){
        this.cargarMedico(id)
      }
    })
  }

  ngOnInit() {
    this._hospitalServicio.cargarHospitales()
      .subscribe(hospitales => this.hospitales = hospitales);
      this._modalSubirServicio.notificacion
        .subscribe( resp => {
          this.medico.img = resp.medico.img;
        })
  }
  guardarMedico( f: NgForm ){
    if(f.invalid){
      return
    }
    this._medicoServicio.guardarMedico(this.medico)
      .subscribe(medico =>{
        this.medico._id = medico._id;
        this.router.navigate(['/medico', medico._id])
      })
  } 

  cambioHospital(id: string){
    this._hospitalServicio.obtenerHospital(id)
      .subscribe(hospital => {
        this.hospital = hospital
      })
  }

  cargarMedico(id: string){
    this._medicoServicio.cargarMedico(id)
      .subscribe(medico =>{ 

        this.medico = medico
        this.medico.hospital = medico.hospital._id;
        this.cambioHospital(this.medico.hospital)
      })
  }

  cambiarFoto(){
    this._modalSubirServicio.mostrarModal('medicos', this.medico._id)

  }
}
