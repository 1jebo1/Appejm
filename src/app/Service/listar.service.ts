import { Injectable } from '@angular/core';
import{HttpClient } from '@angular/common/http'
import { Producto } from '../Modelo/Producto';
@Injectable({
  providedIn: 'root'
})
//en costructor se referencia con clase producto en BCK
export class ServiceService {
  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/appejm/producto'; //conexion con el bck en spring de java 
   //metodos que reciben y entregan datos a los metodos en el bck el clase serviceimp a travez del controlador
  getProducto(){
    return this.http.get<Producto[]>(this.Url);
  }
  createProducto(producto:Producto){
    return this.http.post<Producto>(this.Url,producto);
  }
  getProductoId(id:number){
    return this.http.get<Producto>(this.Url+"/"+id);   // retorna persona mas la id referencial 
  }
  updateProducto(producto:Producto){
    return this.http.put<Producto>(this.Url+"/"+producto.id,producto);  //entrega el objecto persona actulizado 
  }
  deleteProducto(producto:Producto){
    return this.http.delete<Producto>(this.Url+"/"+producto.id);
 }
}