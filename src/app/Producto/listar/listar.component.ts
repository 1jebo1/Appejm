import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelo/Producto';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/listar.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  productos: Producto[];
  constructor(private service: ServiceService, private router: Router) { }
//subcribe de angular
  ngOnInit() {
    this.service.getProducto()
      .subscribe(data => {
        this.productos = data;
      });
  }
  Editar(producto:Producto):void{
    localStorage.setItem("id",producto.id.toString());
    this.router.navigate(["editar"]);
  }//entrega el id de la fila 

  Borrar(productos:Producto){
    this.service.deleteProducto(productos)
    .subscribe(data=>{
      this.productos=this.productos.filter(p=>p!==productos);
      alert("Producto  borrado...");
    })
  }
}
