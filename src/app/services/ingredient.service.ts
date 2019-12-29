import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingredient } from '../models/ingredient';



@Injectable({
  providedIn: 'root'
})
  
export class IngredientService {
  apiUrl = "http://localhost:8000/api/ingredients"

  constructor(private http:HttpClient) { }

  findAll(){
    return this.http.get<Ingredient[]>(this.apiUrl+".json");
  }
}
