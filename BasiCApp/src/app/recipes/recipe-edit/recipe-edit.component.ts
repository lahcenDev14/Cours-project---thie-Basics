import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { RecipeService } from '../recipe.service';

import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit{

  id:number;
  editMode = false;
  recipeform : FormGroup;

  constructor(private route:ActivatedRoute, private recipeservice : RecipeService,
     private router : Router){}
  ngOnInit(): void {


    this.route.params.subscribe(
      (params : Params)=>{
        this.id = params['id'];
        this.editMode = params['id'] != null;
        this.initform();
        
      }
    );

    
  }

  onaddingredients(){

    (<FormArray>this.recipeform.get('ingredients')).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )

  }

  private initform(){
   let recipename:String = '';
   let RecipeImagePath:String ='';
   let RecipeDescription:String = '';
   let recipeingredients = new FormArray([]);

    if(this.editMode){
        const recipe  = this.recipeservice.getrecip(this.id);
        recipename = recipe.name;
        RecipeImagePath = recipe.imagePath;
        RecipeDescription = recipe.description;

        if(recipe['ingredients']){
           
          for(let ingredient of recipe.ingredients)
          recipeingredients.push(
            new FormGroup({
            'name':new FormControl(ingredient.name,Validators.required),
            'amount':new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          )
            
          

          
        }
          
    }

    this.recipeform = new FormGroup({
      'name': new FormControl(recipename,Validators.required),
      'imagePath': new FormControl(RecipeImagePath,Validators.required),
      'description':new FormControl(RecipeDescription,Validators.required),
      'ingredients': recipeingredients
    })
  }



  onsubmite(){
      
    const newrecipe = new Recipe(this.recipeform.value['name'],
      this.recipeform.value['description'],
      this.recipeform.value['imagePath'],
      this.recipeform.value['ingredients']);

    if(this.editMode){
      this.recipeservice.updaterecipe(this.id,newrecipe);
    }else{
      this.recipeservice.addrecipe(newrecipe);
    }

    this.oncancel();
    
  }

  oncancel(){
    this.router.navigate(['../'],{relativeTo : this.route});
  }

 
  ondeleteingredients(index : number){
    (<FormArray>this.recipeform.get('ingredients')).removeAt(index)
  }
  

}
