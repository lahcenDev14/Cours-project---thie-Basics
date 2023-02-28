import {Recipe} from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import {Subject} from 'rxjs/Subject';

export class RecipeService{

  recepesChanged = new Subject<Recipe[]>();

  recipeevent = new EventEmitter<Recipe>();

  private  recipes : Recipe[] = [
     new Recipe('recip1',
     'a test of recipe',
     'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg',[
      new Ingredients('banan',5),
      new Ingredients('banan',5)
     ]),

      new Recipe('recip2',
      'a test of recipe',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg',
      [
        new Ingredients('Buns', 2),
        new Ingredients('Meat', 1)
      ])];

   
  getrecipe(){

    return this.recipes.slice();

  }

  getrecip(index:number){
   
     return this.recipes[index];

  }

  
  addrecipe(recipe : Recipe)
  {
     this.recipes.push(recipe);
     this.recepesChanged.next(this.recipes.slice())
  }
   updaterecipe(index : number,newrecipe : Recipe){
      this.recipes[index] = newrecipe;
      this.recepesChanged.next(this.recipes.slice())
   } 


   deleterecepe(index:number){
 
     this.recipes.splice(index,1)
     this.recepesChanged.next(this.recipes.slice())
 
   }


}