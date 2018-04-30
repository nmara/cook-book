import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
    selector: 'shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[] = [
        new Ingredient ('Apple', 5),
        new Ingredient ('Tomatoes', 10),
        new Ingredient ('Banana', 3)
    ];

    onAddedIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
    constructor() { }

    ngOnInit() {
    }

}
