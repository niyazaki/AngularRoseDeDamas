import { Component, OnInit, Input, Output } from "@angular/core";
import { IngredientService } from "src/app/services/ingredient.service";
import { Ingredient } from "src/app/models/ingredient";

@Component({
  selector: "app-ingredient",
  templateUrl: "./ingredient.component.html",
  styleUrls: ["./ingredient.component.css"]
})
export class IngredientComponent implements OnInit {
  @Input() listIngredient: string[];

  public ingredients: Ingredient[] = [];

  constructor(private ingredientService: IngredientService) {}

  ngOnInit() {
    this.listOfIngredient();
  }

  getIngredientByUrl(url: string) {
    this.ingredientService.findById(url).subscribe(data => {
      this.ingredients.push(data);
    });
  }

  listOfIngredient() {
    for (var j = 0; j < this.listIngredient.length; ++j) {
      this.getIngredientByUrl(this.listIngredient[j]);
    }
  }
}
