import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { RecipeBook } from '../recipe-book.model';
import { RecipeBookService } from '../recipe-book.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: RecipeBook;
  id: number;

  constructor(private recipeBookService: RecipeBookService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeBookService.getRecipe(this.id);
        }
      );
  }

  onAddToShoppingList() {
    this.recipeBookService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
