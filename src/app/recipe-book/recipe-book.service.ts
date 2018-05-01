import { EventEmitter } from '@angular/core';
import { RecipeBook } from './recipe-book.model';

export class RecipeBookService {
  recipeSelected = new EventEmitter<RecipeBook>();

  private recipes: RecipeBook[] = [
    new RecipeBook ('Test name', 'Test desc', 'http://img.bestrecipes.com.au/rZFo7F8i/h300-w400-cscale-1495077669/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg'),
    new RecipeBook ('Test name2', 'Test desc2', 'http://img.bestrecipes.com.au/rZFo7F8i/h300-w400-cscale-1495077669/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
