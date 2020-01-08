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
}
