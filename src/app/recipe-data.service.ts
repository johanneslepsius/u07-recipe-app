import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeDataService {
  recipe: {};
  savedRecipes: any = [];
  constructor(private http: HttpClient) { }

  // fixa recipe-interface

  getRecipes(): Observable<[any]> {
    return this.http.get<any>('http://localhost:3000/hits')
  }
  getRecipe(uri: string): Observable<[any]> {
    return this.http.get<any>(`https://api.edamam.com/search?r=${uri}&app_id=412c10ab&app_key=2382a0e38c595f09a346292710a732e4`)
  }
  
  /*selectRecipe(recipeObj: Object) {
    this.recipe = recipeObj;
  }
  getRecipe(): Object {
    return this.recipe;
  }
  */
}
// https://api.edamam.com/search?q=apple&app_id=412c10ab&app_key=2382a0e38c595f09a346292710a732e4&from=0&to=99

