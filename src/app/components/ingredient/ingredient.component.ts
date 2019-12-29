import { Component, OnInit } from '@angular/core';
import { IngredientService } from 'src/app/services/ingredient.service';
import { Ingredient } from 'src/app/models/ingredient';


@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  myIngredient : Ingredient={
    name : "",
    idSweet : 0
  }
  
  ingredients : Ingredient[] = [];

  constructor(private ingredientService : IngredientService) { }

  ngOnInit() {
    this.getIngredients();
  }
  
  getIngredients(){
    this.ingredientService.findAll()
        .subscribe(ingredients => this.ingredients = ingredients);
  }
}
