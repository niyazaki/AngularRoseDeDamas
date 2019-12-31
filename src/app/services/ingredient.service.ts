import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Ingredient } from "../models/ingredient";

@Injectable({
  providedIn: "root"
})
export class IngredientService {
  apiUrl = "http://localhost:8000/api/ingredients";
  serverUrl = "http://localhost:8000";

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<Ingredient[]>(this.apiUrl);
  }

  findById(url: string) {
    return this.http.get<Ingredient>(this.serverUrl + url);
  }

  delete(id : number){
    return this.http.delete(this.apiUrl+"/"+id)
  }

  post(ingredient){
    return this.http.post<Ingredient>(this.apiUrl, ingredient);
  }

  put(id, ingredient){
    return this.http.put<Ingredient>(this.apiUrl + "/" + id, ingredient);
  }
}
