import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RecipeBook } from '../recipe-book.model';
import { RecipeBookService } from '../recipe-book.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: RecipeBook[];

    constructor(private recipeBookService: RecipeBookService,
                private router: Router,
                private route: ActivatedRoute) { }

    ngOnInit() {
      this.recipes = this.recipeBookService.getRecipes();
    }

    onNewRecipe() {
      this.router.navigate(['new'], {relativeTo: this.route});
    }

}
