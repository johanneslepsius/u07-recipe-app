import { Component, OnInit } from '@angular/core';
import { RecipeDataService, Recipelist } from '../recipe-data.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {
  recipes: Array<object>;
  lists: Array<Recipelist>;
  currentList: number;
  clickedList: number;
  create_d: string = 'Create';
  createError: boolean = false;

  constructor(
    private recipeDataService: RecipeDataService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.getLists();
  }

  ngAfterViewChecked() {
    const activeButtons = document.querySelectorAll('.active');
    if (activeButtons.length === 0 && this.lists[0]) {
      this.activate(this.lists[0].id);
    }
  }

  open(createListModal): any {
    this.modalService.open(createListModal).result.then((result) => {
      
      console.log(result);
    }, (reason) => {
      this.create_d = 'Create';
      console.log(reason);
    });
  }

  activate(id) {
    const activeButtons = document.querySelectorAll('button.active.nav-link');
    activeButtons?.forEach(el => {
      el.className = 'nav-link';
    });
    const activeButton = document.getElementById(id);
    console.log(activeButton)
    activeButton.className = 'nav-link active';
  }

  getLists() {
    this.recipeDataService.getLists().subscribe(
      data => {
        // console.log(data);
        this.lists = data;
        if(data[0]) {
          this.getRecipes(data[0].id);
        this.currentList = data[0].id;
        }
        
      },
      err => {

      }
    );
  }

  createList(form) {
    this.create_d = 'Creating...';
    this.recipeDataService.createList(form.listName).subscribe(
      data => {
        this.create_d = 'Created!';
        this.getLists();
      },
      err => {
        this.createError = true;
      }
    );
    
  }

  getRecipes(id: number) {
    this.currentList = id;
    this.recipeDataService.getSavedRecipes(id).subscribe(
          data => {
            console.log(data);
            this.recipes = data;
          },
          err => {

          }
        );
  }

  deleteRecipe(id: number) {
    this.recipeDataService.deleteRecipe(id).subscribe(
          data => {
            this.getRecipes(this.currentList);
          },
          err => {

          }
        );
  }

  deleteRecipelist() {
    let id = this.clickedList;
    console.log(id);
    this.recipeDataService.deleteRecipelist(id).subscribe(
          data => {
            this.getLists();
            this.recipes = null;
          },
          err => {

          }
        );
  }

}
