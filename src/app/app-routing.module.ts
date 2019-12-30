import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SweetComponent } from './components/sweet/sweet.component';


const routes: Routes = [
  { path: 'patisserie', component: SweetComponent },
  { path: 'ingredient', component: SweetComponent },
  { path: '',   redirectTo: '/patisserie', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
