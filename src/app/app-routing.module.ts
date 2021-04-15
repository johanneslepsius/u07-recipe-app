import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SavedComponent } from './saved/saved.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent },
  {path: 'saved', component: SavedComponent },
  {path: 'recipe/:uri', component: RecipeComponent },
  {path: '**', component: NotFoundComponent, data: {title: 'Ooops'} }   // how tf do i access title
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
     scrollPositionRestoration: 'enabled'    // sounds good, doesn't work
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// kanske fler routingmoduler?
