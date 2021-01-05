import { Injectable } from '@angular/core';
import { Pesanan } from '../models/pesanan.model';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PesananService {
  

 
baseUrl ="http://www.omdbapi.com/";
pesananurl="https://my-json-server.typicode.com/inggolanda/data/pesanan"

  constructor(private httpClient: 
    HttpClient) { }

  onGetall(){
    return this.httpClient.get(this.pesananurl)

    .pipe(
      map((response:Response)=>response),
      catchError(this.handleError)
    )
  }

  onGet(id){
    return this.httpClient.get('${this.pesananurl}/${id}')

    .pipe(
      map((response:Response)=>response),
      catchError(this.handleError)
    )
  }

  onDetail(param){
    return this.httpClient.get(this.baseUrl+'?apikey=5a9cccb8&i='+param)

    .pipe(
      map((response:Response)=>response),
      catchError(this.handleError)
    )
  }

  onposter(param){
    return this.httpClient.get(this.baseUrl+'?apikey=5a9cccb8&s='+param)
      
    .pipe(
      map((response: Response) => response),
      catchError(this.handleError)
    )
  }

  create(data): Observable<any> {
    return this.httpClient.post(this.pesananurl, JSON.stringify(data))
    
    .pipe(
      map((response:Response)=>response),
      catchError(this.handleError)
    )
  }

  update(id, data): Observable<any>{
    return this.httpClient.put('${this.baseUrl}/${id}', data)
    
    .pipe(
      map((response:Response)=>response),
      catchError(this.handleError)
    )
  }

  delete(id): Observable<any>{
    return this.httpClient.delete('${this.baseUrl)/${id}')

    .pipe(
      map((response:Response)=>response),
      catchError(this.handleError)
    )
  }

  private handleError(error){
    console.log(error)
    return throwError(error);
  }
}
