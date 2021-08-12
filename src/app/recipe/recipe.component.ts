import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RecipeDataService } from '../recipe-data.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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
  loadingLists: boolean = true;
  lists: Array<object> = [{'name': 'Loading...'}];
  save_d: string = 'Save';

  constructor(
    private route: ActivatedRoute,
    private recipeDataService: RecipeDataService,
    private modalService: NgbModal
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

  saveRecipe(listForm) {
    // let uri = decodeURIComponent(this.uri)
    // if (this.recipeDataService.savedRecipes.findIndex(i => i.uri === uri) === -1){
      // this.recipeDataService.savedRecipes.push(this.recipe)
    // }
    this.save_d = 'Saving...';
    console.log(listForm.listSelector, encodeURIComponent(this.recipe.uri), this.recipe.label);
    this.recipeDataService.saveRecipe(listForm.listSelector, encodeURIComponent(this.recipe.uri), this.recipe.label).subscribe(
      data => {
        this.save_d = 'Saved!';
        // console.log(data)
      },
      err => {
        console.log(err)
      }
    );

    console.log(listForm);
  }

  open(listModal): any {
    this.getLists();
    this.modalService.open(listModal).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  }

  getLists(): any {
    
    this.recipeDataService.getLists().subscribe(
        data => {
          if (data.length >= 1) {
            console.log(data)
            this.lists = data;
            this.loadingLists = false;
          }
          
          console.log(data);
        }
      )
  }

}


