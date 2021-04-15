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
// redirectto, pathmatch, routeguard (canactivate)
  {path: '**', component: NotFoundComponent, data: {title: 'Ooops'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// kanske fler routingmoduler?
