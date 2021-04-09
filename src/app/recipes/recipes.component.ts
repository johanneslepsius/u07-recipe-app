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

  constructor(
    private recipeDataService: RecipeDataService,
    private route: ActivatedRoute
    ) { }
  handleClick(evt) {
    console.log(evt);
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
