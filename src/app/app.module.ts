import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './Producto/new/new.component';
import { EditarComponent } from './Producto/editar/editar.component';
import { ListarComponent } from './Producto/listar/listar.component';
import{FormsModule}from '@angular/forms';
import{HttpClientModule}from '@angular/common/http';
import {ServiceService } from '../app/Service/listar.service'



@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    EditarComponent,
    ListarComponent
  ],
  //formsmodule muestreo de datos 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
//el servicio dentro del arreglo providers
export class AppModule { }
