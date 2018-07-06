import { Injectable } from '@angular/core';
import { RecipeBook } from './recipe-book.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeBookService {
  recipesChanged = new Subject<RecipeBook[]>();
  private recipes: RecipeBook[] = [
    new RecipeBook (
    'Apple Cake',
    'The best cake in the entire world!', 'https://2.bp.blogspot.com/-m2y8US9jJJY/V_dJKApCJ1I/AAAAAAAAWtc/Kl9E5zr0zfQVM4Y7M80pCH5JnR7LkL2ywCLcB/s1600/szarlotka3.jpg',
    [
      new Ingredient('apples', 10),
      new Ingredient('flour', 700),
      new Ingredient('butter', 1),
      new Ingredient('sugar', 200),
      new Ingredient('eggs', 3)
    ]),
    new RecipeBook (
    'Lasagne',
    'Yep! Easy and delicous!', 'https://cdn.katalogsmakow.pl/2017/02/02/0x600/lasagne-bolognese.558680.jpg',
    [
      new Ingredient('meat', 600),
      new Ingredient('tomatoes', 1),
      new Ingredient('onion', 1),
      new Ingredient('butter', 200),
      new Ingredient('milk', 200),
      new Ingredient('flour', 20),
      new Ingredient('garlic', 2),
      new Ingredient('lasagne pasta', 1),
      new Ingredient('mozzarella', 250)
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: RecipeBook) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: RecipeBook) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
