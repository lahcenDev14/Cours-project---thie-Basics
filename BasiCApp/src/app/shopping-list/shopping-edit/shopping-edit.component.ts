import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs-compat';
import {Ingredients} from '../../shared/ingredients.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
@ViewChild('f') slchild:NgForm;

  subscription : Subscription;
  ideditingitem : number;
  editmode = false;
  ingredientss : Ingredients;

  constructor(private shoppingservice:ShoppingListService){

  }

  ngOnInit(): void {
    
    this.subscription = this.shoppingservice.startediting.subscribe(
      (index : number) =>{
        this.ideditingitem = index;
        this.editmode = true;
        this.ingredientss = this.shoppingservice.detingredientsedit(index);
        this.slchild.setValue({
          name : this.ingredientss.name,
          amount : this.ingredientss.amount
        })
      }
    );

    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ingredient : Ingredients[];

  //@ViewChild('nameingre') nameingre:ElementRef;
//  @ViewChild('amount') amount:ElementRef;


onclear(){
  this.slchild.reset()
  this.editmode = false;
}


onaddingredient(form : NgForm){
    //const name =nameingre;
    //const amount = amountingre;
  
    const value = form.value;
    const ingredient  = new Ingredients(value.name,value.amount);
    if(this.editmode){
      this.shoppingservice.updateingredients(this.ideditingitem, ingredient)
    }else{
      this.shoppingservice.ingredientevent(ingredient);
    }
    this.editmode = false;
    form.reset();
    

  }

  ondelete(){
    this.shoppingservice.delete(this.ideditingitem);
    this.onclear();
     
  }



  

}
