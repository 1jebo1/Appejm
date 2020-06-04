import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Appejm';
  // metodos de enrutamientos o redirreccion
  constructor(private router:Router){}
  Listar(){
    this.router.navigate(["listar"]);
  }
  New(){
    this.router.navigate(["new"]);
  }
}

