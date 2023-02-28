import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-liste',
  templateUrl: './recipe-liste.component.html',
  styleUrls: ['./recipe-liste.component.css']
})
export class RecipeListeComponent implements OnInit, OnDestroy{

  recipes : Recipe[];
  subscription : Subscription;

  constructor(private recipeservice : RecipeService,private router:Router,private route : ActivatedRoute){

  }
  ngOnInit(){
    this.subscription = this.recipeservice.recepesChanged.subscribe(
      (recipes : Recipe[])=>{
        this.recipes = recipes;
      }
    )
    this.recipes = this.recipeservice.getrecipe();
  }

  onaddrecipes(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }

  //@Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  /*recipes : Recipe[] = [new Recipe('recip1','a test of recipe','https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'),
  new Recipe('recip2','a test of recipe','https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'),];*/

  /*OnrecipeSelected(recipe : Recipe)
  {
       this.recipeWasSelected.emit(recipe);
  }*/

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
  
}
