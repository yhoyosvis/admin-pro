import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenulateralService {
  menu: any = [
    {
      titulo: 'principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        {  titulo: 'Tablero', url: '/principal' },
        {  titulo: 'BarrasProgreso', url: '/progreso' },
        {  titulo: 'graficas', url: '/graficas1' },

      ]
    }
  ];
  constructor() { }
}
