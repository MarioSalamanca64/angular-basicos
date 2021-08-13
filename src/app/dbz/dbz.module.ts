//crear modulo automatico 
//ng g m dbz/nombredelmodulo
//crear componente 
//ng g c dbz/mainPage --skipTests == a quitar el archivo de pruebas
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';





@NgModule({
  declarations: [MainPageComponent, PersonajesComponent, AgregarComponent],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    //importar los formularios de mismo angular
    FormsModule
  ],
  //apartado adiccional para poner lo de lacarpeta services providers=servicios
  providers:[
    DbzService
  ]
})
export class DbzModule { }
