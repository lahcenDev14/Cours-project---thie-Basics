import {Recipe} from './recipe.model';

export class RecipeService{

  private  recipes : Recipe[] = [new Recipe('recip1','a test of recipe','https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'),
  new Recipe('recip2','a test of recipe','https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'),];

   
  getrecipe(){

    return this.recipes.slice();

  }
  
    
}