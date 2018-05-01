import { Component, OnInit, Input } from '@angular/core';

import { RecipeBook } from '../recipe-book.model';
import { RecipeBookService } from '../recipe-book.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: RecipeBook;

  constructor(private recipeBookService: RecipeBookService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.recipeBookService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
