import { Component, OnInit } from '@angular/core';

import { JogoDaVelhaService } from './shared/jogo-da-velha.service';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.scss']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService ) { }

  ngOnInit() {

    this.jogoDaVelhaService.inicializar()

  }

  /**
   * Obtém se a tela inicial deve ser exibida
   * 
   * @return boolean
   * 
   */
  get showInicio():boolean{
    return this.jogoDaVelhaService.showInicio
  }

  /**
   * 
   * Obtém se o tabuleiro deve ser exibido
   * 
   * @return boolean
   * 
   */
  get showTabuleiro(): boolean{
    return this.jogoDaVelhaService.showTabuleiro
  }

  /**
   * Obtém se a tela de finalização de jogo deve ser exibida
   * 
   * @return boolean
   */
  get showFinal(): boolean{
    return this.jogoDaVelhaService.showFinal
  }

  /**
   * Iniciar um novo jogo
   * 
   * @return void
   * 
   */
  iniciarJogo(): void{
    this.jogoDaVelhaService.iniciarJogo()
  }

}
