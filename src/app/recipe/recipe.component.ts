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
  btntxt: string;
  saved: boolean;
  listpopup: boolean;

  constructor(
    private route: ActivatedRoute,
    private recipeDataService: RecipeDataService
    ) {}

  ngOnInit(): void {
    
      this.uri = encodeURIComponent(this.route.snapshot.paramMap.get('uri'));

      this.recipeDataService.getRecipe(this.uri)
        .subscribe(data => {
          this.recipe = data[0];
          console.log(this.recipe)
        })

      this.btntxt = 'Save Recipe';
    
  }

  saveRecipe() {
    // let uri = decodeURIComponent(this.uri)
    // if (this.recipeDataService.savedRecipes.findIndex(i => i.uri === uri) === -1){
      // this.recipeDataService.savedRecipes.push(this.recipe)
    // }
    
    this.recipeDataService.getLists().subscribe(
      data => {
        this.listpopup = true;
        console.log(data);
      }
    )
  }

}
