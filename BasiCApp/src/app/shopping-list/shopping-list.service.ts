import { Subject } from 'rxjs';
import {Ingredients} from '../shared/ingredients.model';
export class ShoppingListService{

    startediting = new Subject<number>();

    ingredient: Ingredients[] = [
        new Ingredients('Apple',5),
        new Ingredients('Tomatos',10)];


         
        getingreditens(){

            return this.ingredient;
        }

        detingredientsedit(index : number)
        {
           return this.ingredient[index];
        }

    
        ingredientevent(ingredients : Ingredients){
      
            this.ingredient.push(ingredients);        
           
          }

          updateingredients(index : number , newingredient : Ingredients)
          {
            this.ingredient[index] = newingredient;
            
          }

          delete(index : number){
            this.ingredient.splice(index,1);

          }

          
}