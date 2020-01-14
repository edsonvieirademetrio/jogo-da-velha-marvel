import { Component, OnInit } from '@angular/core';

import { JogoDaVelhaService } from './shared/jogo-da-velha.service';
import { MarvelApiService } from './shared/marvel-api.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, catchError} from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { async } from 'q';
//import { element } from 'protractor';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.scss']
})
export class JogoDaVelhaComponent implements OnInit {

  //Formulário de Jogador
  formularioDeJogador: FormGroup;

  constructor(private jogoDaVelhaService: JogoDaVelhaService, private marvelApiService: MarvelApiService, private fb: FormBuilder ) { 
    
  }

  resultado: Observable<any>
  nomeConvert: String
  todosJogadores:any = []
  placarJogador01:number = 0
  placarJogador02:number = 0
  numJogadores:any = 0

  ngOnInit() {

    //Inicia as funcionalidades
    this.jogoDaVelhaService.inicializar()

    //Inicia o servico da API Marvel
    this.criarFormularioDeJogador();

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

    let jogadorInicio = this.jogoDaVelhaService.sorteioJogador()
    if(jogadorInicio == 1){
      this.jogoDaVelhaService.iniciarJogo()
    }else{
      this.jogoDaVelhaService.iniciarJogo()
      this.jogoDaVelhaService.cpuJogar()

    }

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

  /**
   * Obtém o número do último que jogou
   * 
   * @return number
   * 
   */
  get jogador(): number{
    let jogador =  this.jogoDaVelhaService.jogador  
    return jogador

  }

  /**
   * Dá inicio a um novo jogo
   * 
   * @return void
   * 
   */
  novoJogo(): void{ 
    this.atualizaPlacar   
    let jogadorInicio = this.jogoDaVelhaService.sorteioJogador()
    if(jogadorInicio == 1){
      this.jogoDaVelhaService.novoJogo()
    }else{
      this.jogoDaVelhaService.novoJogo()
      this.jogoDaVelhaService.cpuJogar()

    }    
  }

  /**
   * Obtem os jogadores Marvel
   *
   */
  getJogadores(nome){
    //this.allCharacters = this.characterSrv.getAllCharacters()
    nome = this.formularioDeJogador.value.nome //passa o nome para o serviço
    this.nomeConvert = nome.replace(' ', '-')
    nome = this.nomeConvert.toLocaleLowerCase()
    //exibe o resultado na tela
    this.resultado = this.marvelApiService.getPersonagens(nome).pipe(map((data:any)=> data.data.results ))
    //Armazena os jogadores escolhidos
    let jogadores:any = []
    this.resultado.forEach(function (value) {
      if(value.length == 0){
        return null
      }else{
        let jogadoresInterno = {        
          'nome': value[0]['name'],
          'thumbnail': `${value[0]['thumbnail']['path']}.${value[0]['thumbnail']['extension']}`
        }
        if(jogadoresInterno.nome) {
          jogadores.push(jogadoresInterno)
        }
      }     
    });
    Promise.all(jogadores).then(element=>element)    
    this.todosJogadores.push(jogadores)  
    
  }

  /**
   * Cria um formulário para obter jogador
   * 
   * @return string
   * 
   */
  criarFormularioDeJogador() {
    this.formularioDeJogador = this.fb.group({
      nome: ['']
    });
  }


  get atualizaPlacar(){    
    if(this.jogoDaVelhaService.showFinal == true ){      
      let ultimoJogador = this.jogoDaVelhaService.jogador
      if(ultimoJogador == 1){
        this.placarJogador01++
      }else if(ultimoJogador == 2){
        this.placarJogador02++
      }else{
        return false
      }      
    }
  }
  


}
