import { Component, OnInit } from "@angular/core";
import { IngredientService } from "src/app/services/ingredient.service";
import { Ingredient } from "src/app/models/ingredient";

@Component({
  selector: "app-list-ingredient",
  templateUrl: "./list-ingredient.component.html",
  styleUrls: ["./list-ingredient.component.css"]
})
export class ListIngredientComponent implements OnInit {
  myIngredient: Ingredient = {
    name: "",
    idSweet: 0
  };
  ingredients: Ingredient[] = [];

  constructor(private ingredientService: IngredientService) {}

  ngOnInit() {
    this.getIngredients();
  }

  getIngredients() {
    this.ingredientService.findAll().subscribe(ingredients => {
      this.ingredients = ingredients;
    });
  }

  deleteIngredient(id: number) {
    this.ingredientService.delete(id).subscribe(() => {
      this.ingredients = this.ingredients.filter(
        ingredient => ingredient.id != id
      );
    });
  }
}
