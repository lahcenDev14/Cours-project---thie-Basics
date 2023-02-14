import {Ingredients} from '../shared/ingredients.model';
export class ShoppingListService{

    ingredient: Ingredients[] = [
        new Ingredients('Apple',5),
        new Ingredients('Tomatos',10)];


        

    
        ingredientevent(ingredients : Ingredients){
      
            this.ingredient.push(ingredients);        
           
          }

          
}