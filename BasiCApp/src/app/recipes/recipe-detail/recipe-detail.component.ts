import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{

  recipe : Recipe;
  id:number;
  constructor(private route : Router,private router:ActivatedRoute,private recipesService : RecipeService){}

  ngOnInit(): void {
    
    this.router.params.subscribe(
      (param : Params)=>{
        this.id = +param['id'];
        this.recipe = this.recipesService.getrecip(this.id);
      }
    )
  }

  onEditeRecipe(){

   this.route.navigate(['edit'],{relativeTo:this.router});

  }
  
  ondeletrecipe(){
    this.recipesService.deleterecepe(this.id);
    this.route.navigate(['/recipes']);
  }
  
}
