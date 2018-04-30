import { Component, OnInit } from '@angular/core';

import { RecipeBook } from './recipe-book.model';

@Component({
    selector: 'recipe-book',
    templateUrl: './recipe-book.component.html',
    styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
    selectedRecipe: RecipeBook;
    
    constructor() { }

    ngOnInit() {
    }

}
