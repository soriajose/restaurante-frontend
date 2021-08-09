import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseDTO } from '../interfaces/response-dto';
import { Restaurante } from '../interfaces/restaurante';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  constructor(private httpClient: HttpClient) { }


  getRestaurantes(){
    return this.httpClient.get<ResponseDTO>('http://localhost:8080/restaurantes');
  }

  
  postRestaurante(restaurante: Restaurante){
    return this.httpClient.post<ResponseDTO>('http://localhost:8080/restaurantes', restaurante);
  }
  

  updateRestaurante(id: number, input: Restaurante){
    return this.httpClient.put<ResponseDTO>('http://localhost:8080/restaurantes/' + id, input);
  }

  
  deleteRestaurante(id: number){
    return this.httpClient.delete<ResponseDTO>('http://localhost:8080/restaurantes/' + id);
  }

}
