import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sweet } from '../models/sweet';


@Injectable({
  providedIn: 'root'
})
export class SweetService {
  apiUrl = "http://127.0.0.1:8000/api/sweets";
  constructor(private http : HttpClient) { }

  findAll(){
    return this.http.get<Sweet[]>(this.apiUrl+".json");
  }

  delete(id : number){
    return this.http.delete(this.apiUrl+"/"+id);
  }

  postS(sweet){
    return this.http.post<Sweet>(this.apiUrl, sweet );
  }

}
