import { Component, Input } from '@angular/core';

import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-liste',
  templateUrl: './recipe-liste.component.html',
  styleUrls: ['./recipe-liste.component.css']
})
export class RecipeListeComponent {

   recipes : Recipe[] = [new Recipe('this is a recipe test','a test of recipe','https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'),
  new Recipe('this is a recipe test','a test of recipe','https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'),];
  
}
