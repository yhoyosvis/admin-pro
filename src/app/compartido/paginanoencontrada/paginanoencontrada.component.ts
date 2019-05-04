import { Component, OnInit } from '@angular/core';
declare function init_plugins();
@Component({
  selector: 'app-paginanoencontrada',
  templateUrl: './paginanoencontrada.component.html',
  styles: []
})
export class PaginanoencontradaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins()
  }

}
