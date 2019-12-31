import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IngredientService } from "src/app/services/ingredient.service";
import { Ingredient } from "src/app/models/ingredient";
import { SweetService } from "src/app/services/sweet.service";
import { Sweet } from "src/app/models/sweet";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-edit-ingredient",
  templateUrl: "./edit-ingredient.component.html",
  styleUrls: ["./edit-ingredient.component.css"]
})
export class EditIngredientComponent implements OnInit {
  ingredientId: number;
  apiUrl = "/api/ingredients/";
  ingredient: Ingredient;
  myIngredient: Ingredient = {
    name: "",
    idSweet: 0
  };
  isLoading: boolean;
  isSweetLoaded: boolean;
  selectedSweet: any;


  sweets: Sweet[] = [];

  constructor(
    private route: ActivatedRoute,
    private ingredientService: IngredientService,
    private sweetService: SweetService
  ) {
    this.isLoading = true;
    this.selectedSweet = null;
    this.isSweetLoaded = false;
  }

  ngOnInit() {
    this.ingredientId = this.route.snapshot.params["id"];
    this.getIngredientDetails(this.ingredientId);
    this.getSweets();
  }

  getSweets() {
    this.sweetService.findAll().subscribe(sweets => {
      this.sweets = sweets;
      this.selectedSweet = this.sweets[0];
      this.isSweetLoaded = true;
    });
  }

  getIngredientDetails(id) {
    this.ingredientService.findById(this.apiUrl + id).subscribe(ingredient => {
      this.ingredient = ingredient;
      this.isLoading = false;
    });
  }

  editIngredient() {
    let jsonVariable = {
      name: this.ingredient.name,
      sweet: "api/sweets/" + this.selectedSweet
    };

    this.ingredientService.put(this.ingredientId, jsonVariable).subscribe(data => {
      console.log(data);
    });
  }
}
