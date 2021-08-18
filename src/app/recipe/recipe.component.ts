import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeDataService } from '../recipe-data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user.service';

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
    private modalService: NgbModal,
    public userService: UserService
    ) {}

  ngOnInit(): void {
    
      this.uri = encodeURIComponent(this.route.snapshot.paramMap.get('uri'));

      this.recipeDataService.getRecipe(this.uri)
        .subscribe(data => {
          this.recipe = data[0];
        })

      this.btntxt = 'Save Recipe';
    
  }

  saveRecipe(listForm) {
    this.save_d = 'Saving...';
    this.recipeDataService.saveRecipe(listForm.listSelector, encodeURIComponent(this.recipe.uri), this.recipe.label).subscribe(
      data => {
        this.save_d = 'Saved!';
      },
      err => {
      }
    );
  }

  open(listModal): any {
    this.getLists();
    this.modalService.open(listModal).result.then((result) => {
    }, (reason) => {
      this.save_d = 'Save';
    });
  }

  getLists(): any {
    
    this.recipeDataService.getLists().subscribe(
        data => {
          if (data.length >= 1) {
            this.lists = data;
            this.loadingLists = false;
          }
        }
      )
  }

}


