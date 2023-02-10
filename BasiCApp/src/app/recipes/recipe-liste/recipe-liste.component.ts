import { Component, Input, Output, EventEmitter } from '@angular/core';

import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-liste',
  templateUrl: './recipe-liste.component.html',
  styleUrls: ['./recipe-liste.component.css']
})
export class RecipeListeComponent {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
   recipes : Recipe[] = [new Recipe('recip1','a test of recipe','https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'),
  new Recipe('recip2','a test of recipe','https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'),];

  OnrecipeSelected(recipe : Recipe)
  {
       this.recipeWasSelected.emit(recipe);
  }
  
}
