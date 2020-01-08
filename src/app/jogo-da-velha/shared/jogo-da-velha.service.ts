import { Injectable } from '@angular/core';
import { privateEncrypt } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class JogoDaVelhaService {

  //Define o tamanho do tabuleiro
  private readonly TAM_TAB: number = 3
  //Define um jogador
  private readonly X: number = 1
  //Define outro jogador
  private readonly 0: number = 2
  //Terceiro Estado
  private readonly VAZIO: number = 0

  //Array do tabuleiro
  private tabuleiro: any
  //Obtem o número de movimentos
  private numMovimentos: number
  //Obtem a Vitória
  private vitoria: any

  //Exibe a msg do ganhador e perdedor
  private _jogador: number
  //Primeiro estado
  private _showInicio: boolean
  //Segundo estado
  private _showTabuleiro: boolean
  //Terceiro Estado
  private _showFinal: boolean



  constructor() { }

  /**
   * Primeiro método: Inicializa o jogo e define a exibição da tela de início
   * 
   * @return void
   */
  inicializar(): void{
    this._showInicio = true
    this._showTabuleiro = false
    this._showFinal = false
    this.numMovimentos = 0
    this._jogador = this.X
    this.vitoria = false
    this.inicializarTabuleiro()
  }

  /**
   * Inicia o tabuleiro do jogo com todas as posições VAZIAS
   * 
   * @return void
   */
  inicializarTabuleiro(): void{
    this.tabuleiro = [this.TAM_TAB]
    for(let i=0; i < this.TAM_TAB; i++){
      this.tabuleiro[i] = [this.VAZIO, this.VAZIO, this.VAZIO]
    }
  }

  /**
   * Obtem se a tela de inicio deve ser exibida
   * 
   * @return boolean
   */
  get showInicio(): boolean{
    return this._showInicio
  }

  /**
   * Obtem se o tabuleiro deve ser exibido
   * 
   * @return boolean
   */
  get showTabuleiro(): boolean{
    return this._showTabuleiro
  }

  /**
   * Obtem se a tela final deve ser exibida
   * 
   * @return boolean
   */
  get showFinal():boolean{
    return this._showFinal
  }

  /**
   * Obtem qual jogador vai jogar
   * 
   * @return number
   */
  get jogador(): number{
    return this._jogador
  }

  /**
   * Cria a inicialização do jogo e exibe o tabuleiro
   * 
   * @return void
   */
  iniciarJogo(): void{
    this._showInicio = false
    this._showTabuleiro = true
  }

}
