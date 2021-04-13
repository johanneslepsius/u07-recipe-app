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
  // when true (the user is actively searching for recips) all matching results are shown. 
  // look in html to understand.
  filtering = false;

  constructor(
    private recipeDataService: RecipeDataService,
    private route: ActivatedRoute
    ) { }

  filterRecipe(recipe, limiters) {
    // debugger;
    let trueCounter = 0;
    // console.log(recipe)
    for (let key in limiters){
      if (key === "mealtype") {
        // console.log(recipe.recipe.hasOwnProperty('mealType'))
        // debugger;
          if (recipe.recipe.hasOwnProperty('mealType') && recipe.recipe.mealType.indexOf(limiters[key]) !== -1){
            // console.log(limiters[key]);
            // if (recipe.recipe.mealType.indexOf(limiters[key]) !== -1){
            trueCounter++;
            // console.log("hello i exist");
            // }
          }
        }
      if (key !== "mealtype") {
        // console.log(recipe.recipe.healthLabels)
        if (recipe.recipe.healthLabels.indexOf(key) !== -1){
          trueCounter++;
        }
      }
    }
    // console.log()
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
    console.log(limiters);
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

// https://stackoverflow.com/questions/31831651/javascript-filter-array-multiple-conditions

/*const isMealOK = (meal, limiters) => {
    let manyCorrects = 0;
    for (let obj of limiters){
    if (meal[obj.limit] === obj.value) manyCorrects++
};
return manyCorrects === limiters.length
}

const limiters = [{limit: 'type', value: 'a'}]

const filteredMeals2 = arrObjs.filter(item => {
    return isMealOK(item, limiters)
})

sätta recipes till filteredmeals

https://angular.io/guide/forms

bättre länk!

https://www.tektutorialshub.com/angular/angular-template-driven-forms/
*/
