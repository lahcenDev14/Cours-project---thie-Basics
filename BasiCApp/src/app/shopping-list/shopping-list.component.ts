import { Component } from '@angular/core';
import {Ingredients} from '../shared/ingredients.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredient: Ingredients[] = [
    new Ingredients('Apple',5),
    new Ingredients('Tomatos',10)];

}
