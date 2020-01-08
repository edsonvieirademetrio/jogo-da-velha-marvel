import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogoDaVelhaService {

  //Define o tamanho do tabuleiro
  private readonly TAM_TAB: number = 3
  //Define um jogador
  private readonly X: number = 1
  //Define outro jogador
  private readonly O: number = 2
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
   * Obtem qual o jogador está jogando
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

  /**
   * Executa a jogada de acordo com as coordenadas do tabuleiro
   * 
   * @param number posX
   * @param number posY
   * @return void
   * 
   */
  jogar(posX: number, posY:number): void{
    //verifica se a jogada é válida
    if(this.tabuleiro[posX][posY] !== this.VAZIO || this.vitoria){
      return
    }

    //Executa a jogada
    this.tabuleiro[posX][posY] = this._jogador
    this.numMovimentos ++
    this.vitoria = this.fimJogo(posX, posY, this.tabuleiro, this._jogador)
    this._jogador = (this._jogador === this.X ? this.O : this.X)

    //Executa a jogada do PC
    if(!this.vitoria && this.numMovimentos < 9){
      this.cpuJogar()
    }

    //Verifica se alguém venceu
    if(this.vitoria !== false){
      this._showFinal = true
    }

    //Verifica se empatou
    if(!this.vitoria && this.numMovimentos === 9){
      this._jogador = 0
      this._showFinal = true
    }

  }

  /**
   * Executa a finalização do jogo
   * 
   * @param number linha
   * @param number coluna
   * @param any tabuleiro
   * @param number jogador
   * @return array
   * 
   */
  fimJogo(linha: number, coluna:number, tabuleiro: any, jogador: number){

    let fim: any = false

    //Verifica se é uma linha válida
    if(tabuleiro[linha][0] === jogador && tabuleiro[linha][1] === jogador && tabuleiro[linha][2] === jogador){
      fim = [[linha, 0], [linha, 1], [linha, 2]]
    }

    //Verifica se é uma coluna válida
    if(tabuleiro[0][coluna] === jogador && tabuleiro[1][coluna] === jogador && tabuleiro[2][coluna]){
      fim = [[0, coluna], [1, coluna], [2, coluna]]
    }

    //Verifica se as diagonais são válidas
    if(tabuleiro[0][0] === jogador && tabuleiro[1][1] === jogador && tabuleiro[2][2] === jogador){
      fim = [[0, 0], [1, 1], [2, 2]]
    }
    if(tabuleiro[0][2] === jogador && tabuleiro[1][1] === jogador && tabuleiro[2][0] === jogador){
      fim = [[0,2], [1,1], [2,0]]
    }

    return fim
  }

  /**
   * Implementação da lógica da jogada do CPU em modo aleatório
   * 
   * @return void
   * 
   */
  cpuJogar(): void{
   //Verifica se é uma jogada de vitória
   let jogada: number[] = this.obterJogada(this.O)
   
   if(jogada.length <= 0){
     //tenta jogar para evitar perder
     jogada = this.obterJogada(this.X)
   }

   if(jogada.length <= 0){
     //joga de forma aleatória
     let jogadas: any = []
     for(let i=0; i<this.TAM_TAB; i++){
       for(let j=0; j<this.TAM_TAB; j++){
         if(this.tabuleiro[i][j] === this.VAZIO){
           jogadas.push([i, j])
         }
       }
     }
     let k = Math.floor((Math.random() * (jogadas.length -1)))
     jogada = [jogadas[k][0], jogadas[k][1]]
   }

   this.tabuleiro[jogada[0]][jogada[1]] = this._jogador
   this.numMovimentos ++
   this.vitoria = this.fimJogo(jogada[0], jogada[1], this.tabuleiro, this._jogador)
   this._jogador = (this._jogador === this.X) ? this.O : this.X
  }

}
