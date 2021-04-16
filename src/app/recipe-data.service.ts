import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RecipeDataService {
  recipe: {};
  savedRecipes: any = [];
  constructor(private http: HttpClient) { }

  // kanske fixa recipe-interface

  getRecipes(): Observable<[any]> {
    return this.http.get<any>(`https://api.edamam.com/search?q=apple&app_id=${environment.app_id}&app_key=${environment.app_key}&from=0&to=10`)
  }
  getRecipe(uri: string): Observable<[any]> {
    return this.http.get<any>(`https://api.edamam.com/search?r=${uri}&app_id=${environment.app_id}&app_key=${environment.app_key}`)
  }
  
}


