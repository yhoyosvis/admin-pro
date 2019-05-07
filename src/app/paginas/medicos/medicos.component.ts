import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/modelos/medico.model';
import { MedicoService } from '../../servicios/medico/medico.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: []
})
export class MedicosComponent implements OnInit {

  medicos : Medico [] = [];
  constructor(
    public _medicoServicio: MedicoService
  ) { }

  ngOnInit() {
    this.cargarMedicos();
  }

  cargarMedicos(){
    this._medicoServicio.cargarMedicos()
        .subscribe( medicos => this.medicos  = medicos )
  }

  buscarMedico(termino : string){
    if(termino.length <= 0){
      this.cargarMedicos();
      return;
    }
    this._medicoServicio.buscarMedico(termino)
      .subscribe(medicos => this.medicos = medicos)
  }


  borrarMedico(medico: Medico){
     this._medicoServicio.borrarMedico(medico._id)
      .subscribe( ()=> this.cargarMedicos());
  }

}
