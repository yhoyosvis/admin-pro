import { Component, OnInit } from '@angular/core';
import { UsuarioService, ModalSubirService } from 'src/app/servicios/index.service';
import { Usuario } from 'src/app/modelos/usuario.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  desde: number = 0;
  totalRegistros: number = 0;
  cargando: boolean = true;

  constructor(
    public _usuarioServicio: UsuarioService,
    public _modalSubirServicio: ModalSubirService
    ) { }

  ngOnInit() {
    this.cargarUsuarios()
    this._modalSubirServicio.notificacion
      .subscribe(resp => this.cargarUsuarios())
  }

  mostrarModal(id: string){
    this._modalSubirServicio.mostrarModal('usuarios', id);
  }

  cargarUsuarios() {
    this.cargando = true;
    this._usuarioServicio.cargarUsuarios(this.desde)
      .subscribe((resp: any) => {
        this.totalRegistros = resp.total;
        this.usuarios = resp.usuarios;
        this.cargando = false;

      })
  }

  cambiarDesde(valor: number) {
    let desde = this.desde + valor;

    if (desde >= this.totalRegistros) {
      return;
    }
    if (desde < 0) {
      return;
    }

    this.desde += valor;
    this.cargarUsuarios();
  }

  buscarUsuario(termino: string) {

    if(termino.length <= 0 ){
      this.cargarUsuarios();
      return;
    }

    this.cargando = true;

    this._usuarioServicio.buscarUsuario(termino)
      .subscribe((usuarios: Usuario[]) => {
        this.usuarios = usuarios;
        this.cargando =false;

      }
    )
  }

  borrarUsuario(usuario: Usuario){
    console.log(usuario);

    if(usuario._id === this._usuarioServicio.usuario._id){
      Swal.fire('No puede borrar usuario', 'No se puede borrar a si mismo', 'error')   
      return;
    }

     
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })

    swalWithBootstrapButtons.fire({
      title: 'Esta seguro?',
      text: "Esta a punto de borrar a  " + usuario.nombre,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Continuar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      console.log(result);
      
      if (result.value) {
        this._usuarioServicio.borrarUsuario(usuario._id)
          .subscribe(resp => {
            console.log(resp);
            this.cargarUsuarios();
            
          })
        swalWithBootstrapButtons.fire(
          'Borrado!',
          'El usuario ha sido borrado con exito.',
          'success'
        )
      } else if (
        // Read more about handling dismissals
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Proceso cancelado',
          'error'
        )
      }
    })
  }

  guardarUsuario(usuario: Usuario){
    this._usuarioServicio.actualizarUsuario(usuario)
      .subscribe();
  }
}
