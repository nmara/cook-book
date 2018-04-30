import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { RecipeBook } from '../recipe-book.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output() recipeWasSelected = new EventEmitter<RecipeBook>();

    recipes: RecipeBook[] = [
        new RecipeBook ('Test name', 'Test desc', 'http://img.bestrecipes.com.au/rZFo7F8i/h300-w400-cscale-1495077669/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg'),
        new RecipeBook ('Test name2', 'Test desc2', 'http://img.bestrecipes.com.au/rZFo7F8i/h300-w400-cscale-1495077669/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg')
    ];

    onRecipeSelected(recipe: RecipeBook) {
        this.recipeWasSelected.emit(recipe);
    }

    constructor() { }

    ngOnInit() {
    }

}
