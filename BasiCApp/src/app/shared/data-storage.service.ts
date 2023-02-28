import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({
    providedIn : 'root'
})
export class DataStorageService{
 
 
    constructor(private http : HttpClient,private ricepesservice : RecipeService){}
     recipes = this.ricepesservice.getrecipe();
    storeercepise()
    {
        this.http.put('https://ng-recipes-project-fee86-default-rtdb.firebaseio.com/recipes.json',this.recipes)
        .subscribe(response=>{
               console.log(response);
        })
    }
}