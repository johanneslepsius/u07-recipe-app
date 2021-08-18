import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

export interface Recipelist {
 created_at: string,
 id: number,
 name: string,
 updated_at: string
}

@Injectable({
  providedIn: 'root'
})

export class RecipeDataService {
  recipe: {};

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<[any]> {
    return this.http.get<any>(`${environment.recipe_api}/search?q=apple&app_id=${environment.app_id}&app_key=${environment.app_key}&from=0&to=99`)
  }

  getRecipe(uri: string): Observable<[any]> {
    return this.http.get<any>(`${environment.recipe_api}/search?r=${uri}&app_id=${environment.app_id}&app_key=${environment.app_key}`)
  }

  getLists(){
    return this.http.get<any>(`${environment.user_api}/recipelists`);
  }

  saveRecipe(recipelist:string, recipe_url: string, recipe_label: string) {
    return this.http.post<any>(`${environment.user_api}/save`, {'recipelist': recipelist, 'recipe_url': recipe_url, 'recipe_label': recipe_label});
  }

  getSavedRecipes(recipelist: number) {
    return this.http.get<any>(`${environment.user_api}/recipelists/${recipelist}`);
  }

  createList(name: string) {
    return this.http.post<any>(`${environment.user_api}/recipelists`, {'name': name});
  }

  deleteRecipelist(id: number) {
    return this.http.delete<any>(`${environment.user_api}/recipelists/${id}`);
  }

  deleteRecipe(id: number) {
    return this.http.delete<any>(`${environment.user_api}/save/${id}`);
  }

  
  
}


