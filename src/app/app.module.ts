import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { HeroesModule, } from './heroes/heroes.module';
import { Contadormodule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';






@NgModule({
  //colocar componentes
  declarations: [
    AppComponent,
    
  ],
  //colocar modulos
  imports: [
    BrowserModule,
    //importado de heroes.module.ts y de contador.module.ts que es la classe del modulo
    HeroesModule,
    Contadormodule,
    DbzModule
  ],
  //colocar servicios
  providers: [],
  //modulo principal
  bootstrap: [AppComponent]
})
export class AppModule { }
