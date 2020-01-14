import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { JogoDaVelhaService} from './shared/jogo-da-velha.service';
// Importando o módulo de formulários reativos do angular
import { ReactiveFormsModule } from '@angular/forms';
//Importando o http
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    JogoDaVelhaComponent
  ],
  exports:[
    JogoDaVelhaComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    JogoDaVelhaService
  ]
})
export class JogoDaVelhaModule { }
