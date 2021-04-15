import { Component, OnInit } from '@angular/core';
import { RecipeDataService } from '../recipe-data.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {
  recipes: [];

  constructor(private recipeDataService: RecipeDataService) { }

  ngOnInit(): void {
    this.recipes = this.recipeDataService.savedRecipes;
    console.log(this.recipes)
  }

}
