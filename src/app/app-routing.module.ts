import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SweetComponent } from "./components/sweet/sweet.component";
import { ListIngredientComponent } from "./components/list-ingredient/list-ingredient.component";
import { NewSweetComponent } from "./components/new-sweet/new-sweet.component";
import { EditIngredientComponent } from "./components/edit-ingredient/edit-ingredient.component";
import { NewIngredientComponent } from "./components/new-ingredient/new-ingredient.component";
import { EditSweetComponent } from "./components/edit-sweet/edit-sweet.component";

const routes: Routes = [
  { path: "", component: SweetComponent },
  { path: "newSweet", component: NewSweetComponent },
  { path: "newIngredient", component: NewIngredientComponent },
  { path: "editSweet/:id", component: EditSweetComponent },
  { path: "editIngredient/:id", component: EditIngredientComponent },
  { path: "ingredients", component: ListIngredientComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
