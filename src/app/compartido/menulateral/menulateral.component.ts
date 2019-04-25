import { Component, OnInit } from '@angular/core';
import { MenulateralService } from 'src/app/servicios/index.service';

@Component({
  selector: 'app-menulateral',
  templateUrl: './menulateral.component.html',
  styles: []
})
export class MenulateralComponent implements OnInit {

  constructor( public _menulateral: MenulateralService ) { }

  ngOnInit() {
  }

}
