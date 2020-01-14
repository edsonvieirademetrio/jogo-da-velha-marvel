import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class MarvelApiService {
  
  //Dados da Marvel
  PUBLIC_KEY = '64aee38515e57d25e70ae65bb1a2f912'
  HASH = '1f4d5ad818494befe1f81611c6fd45fd'

  constructor(private http: HttpClient) { }

  //Obtém o personagem marvel
  getPersonagens(nome: string):Observable<any>{
    return this.http.get(`http://gateway.marvel.com/v1/public/characters?ts=1&name=${nome}&orderBy=modified&limit=2&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`)
  }


}
