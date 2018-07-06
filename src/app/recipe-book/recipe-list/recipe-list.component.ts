import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { RecipeBook } from '../recipe-book.model';
import { RecipeBookService } from '../recipe-book.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

    recipes: RecipeBook[];
    subscription: Subscription;

    constructor(private recipeBookService: RecipeBookService,
                private router: Router,
                private route: ActivatedRoute) { }

    ngOnInit() {
      this.subscription = this.recipeBookService.recipesChanged.subscribe(
        (recipes: RecipeBook[]) => {
          this.recipes = recipes;
        }
      );
      this.recipes = this.recipeBookService.getRecipes();
    }

    onNewRecipe() {
      this.router.navigate(['new'], {relativeTo: this.route});
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
}
