import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEditComponent implements OnInit {
    @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;

    @Output() ingredientCreated = new EventEmitter<Ingredient>();

    onAddIngredient() {
        const ingName = this.nameInputRef.nativeElement.value;
        const ingAmount = this.amountInputRef.nativeElement.value;
        const newIngredient = new Ingredient(ingName, ingAmount);
        this.ingredientCreated.emit(newIngredient);
    }


    constructor() { }

    ngOnInit() {
    }

}
