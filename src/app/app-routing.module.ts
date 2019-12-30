import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SweetComponent } from "./components/sweet/sweet.component";
import { ListIngredientComponent } from "./components/list-ingredient/list-ingredient.component";

const routes: Routes = [
  { path: "sweets", component: SweetComponent },
  // TODO: { path: 'sweets/:id', component: SweetDetailsComponent },
  { path: "ingredients", component: ListIngredientComponent },
  { path: "", redirectTo: "/sweets", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
