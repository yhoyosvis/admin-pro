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
        {  titulo: 'Graficas', url: '/graficas1' },
        {  titulo: 'Promesas', url: '/promesas' },
        {  titulo: 'RXJS', url: '/rxjs' },

      ]
    }
  ];
  constructor() { }
}
