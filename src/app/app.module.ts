import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SweetComponent } from './components/sweet/sweet.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { ListIngredientComponent } from './components/list-ingredient/list-ingredient.component';
import { NewSweetComponent } from './components/new-sweet/new-sweet.component';
import { EditIngredientComponent } from './components/edit-ingredient/edit-ingredient.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NewIngredientComponent } from './components/new-ingredient/new-ingredient.component';
import { EditSweetComponent } from './components/edit-sweet/edit-sweet.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SweetComponent,
    IngredientComponent,
    ListIngredientComponent,
    NewSweetComponent,
    EditIngredientComponent,
    NewIngredientComponent,
    EditSweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
