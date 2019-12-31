import { Component, OnInit } from "@angular/core";
import { IngredientService } from "src/app/services/ingredient.service";
import { Ingredient } from "src/app/models/ingredient";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-ingredient",
  templateUrl: "./new-ingredient.component.html",
  styleUrls: ["./new-ingredient.component.css"]
})
export class NewIngredientComponent implements OnInit {
  myIngredient: Ingredient = {
    name: "",
    idSweet: 0
  };
  constructor(
    private ingredientService: IngredientService,
    private router: Router
  ) {}

  ngOnInit() {}

  postIngredient() {
    let jsonVariable = {
      name: this.myIngredient.name,
      idSweet: this.myIngredient.idSweet
    };
    this.ingredientService.post(jsonVariable).subscribe(data => {});
    this.redirect();
  }

  redirect() {
    this.router.navigate(["/ingredients"]);
  }
}
