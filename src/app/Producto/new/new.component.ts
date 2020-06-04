import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from 'src/app/Service/listar.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  productos:Producto=new Producto();
  constructor(private router:Router, private service:ServiceService) { }
  ngOnInit(): void {}
  Guardar(){
    this.service.createProducto(this.productos)
    .subscribe(data=>{
      alert("Se a puesto en venta nuevo producto");
      this.router.navigate(["listar"]);
    })
  }

}
