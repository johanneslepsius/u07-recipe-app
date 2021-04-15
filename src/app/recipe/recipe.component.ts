import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RecipeDataService } from '../recipe-data.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  uri: any;
  recipe: any;

  constructor(
    private route: ActivatedRoute,
    private recipeDataService: RecipeDataService
    ) {}

  ngOnInit(): void {
    
      this.uri = encodeURIComponent(this.route.snapshot.paramMap.get('uri'));
      // console.log(this.uri)

      this.recipeDataService.getRecipe(this.uri)
        .subscribe(data => {
          this.recipe = data[0];
          console.log(this.recipe)
        })
    
  }

  saveRecipe() {
    this.recipeDataService.savedRecipes.push(this.recipe)
  }

}
