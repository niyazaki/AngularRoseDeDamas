import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SweetComponent } from "./components/sweet/sweet.component";
import { ListIngredientComponent } from "./components/list-ingredient/list-ingredient.component";
import { NewSweetComponent } from "./components/new-sweet/new-sweet.component";
import { EditIngredientComponent } from "./components/edit-ingredient/edit-ingredient.component";
import { NewIngredientComponent } from "./components/new-ingredient/new-ingredient.component";

const routes: Routes = [
  { path: "sweets", component: SweetComponent },
  { path: "newSweet", component: NewSweetComponent },
  { path: "newIngredient", component: NewIngredientComponent },
  // TODO: { path: 'sweets/:id', component: SweetDetailsComponent },
  { path: "editIngredient/:id", component: EditIngredientComponent },
  { path: "ingredients", component: ListIngredientComponent },
  { path: "", redirectTo: "/sweets", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
