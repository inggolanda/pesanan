import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {




  baseUrl ="http://www.omdbapi.com/";
  constructor(private httpClient: HttpClient) { }

  onGet(param){
    return this.httpClient.get(this.baseUrl+'?apikey=5a9cccb8&s='+param)
      
    .pipe(
      map((response: Response) => response),
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


  private handleError(error){
    console.log(error)
    return throwError(error);
  }
}
