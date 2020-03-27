import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpNewsService {

  apiKey:string = "77da93c588ff4e648ef8cad27ddc6cbc";
  url:string = "http://newsapi.org/v2/top-headlines?country=us"

  constructor(private http:HttpClient) { }

getAllHeadlines(){
  // const httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     'Authorization': '77da93c588ff4e648ef8cad27ddc6cbc'
  //   })
  // };

  let headers = new HttpHeaders().set('Authorization','77da93c588ff4e648ef8cad27ddc6cbc');
  
  return this.http.get(this.url, {headers} );
}




}


