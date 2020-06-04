import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from 'src/app/Service/listar.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})

export class EditarComponent implements OnInit {
  producto :Producto=new Producto();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }
  // toma el objecto persona de la lista 
  Editar(){
    let id=localStorage.getItem("id");
    this.service.getProductoId(+id)
    .subscribe(data=>{
      this.producto=data;
    })}
    
  Modificar(producto:Producto){
    this.service.updateProducto(producto)
    .subscribe(data=>{
      this.producto=data;
      alert("Modificacion exitosa ");
      this.router.navigate(["listar"]);
    })
  }
}
