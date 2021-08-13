import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { heroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        heroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent,
        heroeComponent
    ],
    imports: [
        //este es el resposable que se use bien el *ngif *ngfor
        CommonModule
    ]

})
//HeroesModule tiene que ir en app.module.ts
export class HeroesModule{

}