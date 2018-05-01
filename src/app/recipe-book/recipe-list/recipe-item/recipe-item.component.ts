import { Component, OnInit, Input } from '@angular/core';

import { RecipeBook } from '../../recipe-book.model';
import { RecipeBookService } from '../../recipe-book.service';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})

export class RecipeItemComponent implements OnInit {

    @Input() recipe: RecipeBook;

    constructor(private recipeBookService: RecipeBookService) {}

    ngOnInit() {}

    onSelectRecipe() {
      this.recipeBookService.recipeSelected.emit(this.recipe);
    }

}
