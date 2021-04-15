import { Component, OnInit } from '@angular/core';
import { RecipeDataService } from '../recipe-data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: [{}];
  filteredRecipes;
  // when false, the recipes-component shows the 8 first results of the api-answer, 
  // when true (the user is actively searching for recipes) all matching results are shown. 
  // look in html to understand.
  filtering = false;

  constructor(
    private recipeDataService: RecipeDataService,
    private route: ActivatedRoute
    ) { }

  filterRecipe(recipe, limiters) {
    let trueCounter = 0;
    for (let key in limiters){
      if (key === "mealtype") {
          if (recipe.recipe.hasOwnProperty('mealType') && recipe.recipe.mealType.indexOf(limiters[key]) !== -1){
            trueCounter++;
          }
        }
      if (key !== "mealtype") {
        if (recipe.recipe.healthLabels.indexOf(limiters[key]) !== -1){
          trueCounter++;
        }
      }
    }
    return trueCounter === Object.keys(limiters).length;
  }

  onSubmit(recipeForm) {
    let limiters = recipeForm.value;
    this.filtering = true;
    
    for (let key in limiters){
      // removing empty values from the form data
      if (!limiters[key]){
        delete limiters[key];
      }
      // setting the checkbox keys value to key name, for example glutenfree: "true" 
      // becomes glutenfree: "glutenfree"
      if (limiters[key] === true){
        limiters[key] = key;
      }
    }
    
    this.filteredRecipes = this.recipes.filter(recipe => {
      return this.filterRecipe(recipe, limiters)
    })
  }

  ngOnInit() {
    this.recipeDataService.getRecipes()
      .subscribe(data => {
        this.recipes = data
        console.log(data)
      })

    console.log(this.recipes);
  }

}
