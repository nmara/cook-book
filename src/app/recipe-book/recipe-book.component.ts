import { Component, OnInit } from '@angular/core';

import { RecipeBook } from './recipe-book.model';
import { RecipeBookService } from './recipe-book.service';

@Component({
    selector: 'recipe-book',
    templateUrl: './recipe-book.component.html',
    styleUrls: ['./recipe-book.component.css'],
    providers: [ RecipeBookService ]
})
export class RecipeBookComponent implements OnInit {
    selectedRecipe: RecipeBook;

    constructor(private recipeBookService: RecipeBookService) { }

    ngOnInit() {
      this.recipeBookService.recipeSelected.subscribe(
        (recipe: RecipeBook) => {
          this.selectedRecipe = recipe;
        }
      );
    }

}
