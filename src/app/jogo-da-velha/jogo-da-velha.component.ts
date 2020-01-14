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

  /**
   * Efetua uma jogada ao clicar em uma das casas do tabuleiro
   * 
   * @param number posX
   * @param number posY
   * @return void
   * 
   */
  jogar(posX: number, posY: number): void{
    this.jogoDaVelhaService.jogar(posX, posY)
  }

  /**
   * Obtém se é a peça X que deve ser exibida para a coordenada informada
   * 
   * @param number posX
   * @param number pos Y
   * @return boolean
   * 
   */
  exibirX(posX: number, posY: number): boolean{
    return this.jogoDaVelhaService.exibirX(posX, posY)
  }

  /**
   * Obtém se é a peça O que deve ser exibida para a coordenada informada
   * 
   * @param number posX
   * @param number pos Y
   * @return boolean
   * 
   */
  exibirO(posX: number, posY: number): boolean{
    return this.jogoDaVelhaService.exibirO(posX, posY)
  }

  /**
   * Obtém se deve exibir a vitória para a coordenada informada
   * 
   * @param number posX
   * @param number pos Y
   * @return boolean
   * 
   */
  exibirVitoria(posX: number, posY: number): boolean{
    return this.jogoDaVelhaService.exibirVitoria(posX, posY)
  }

  




}
