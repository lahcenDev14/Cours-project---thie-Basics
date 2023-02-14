import { Component, OnInit, ViewChild } from '@angular/core';
import {Ingredients} from '../../shared/ingredients.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  constructor(private shoppingservice:ShoppingListService){

  }

  ingredient : Ingredients[];

  @ViewChild('nameingre') nameingre:string;
  @ViewChild('amount') amount:number;


  onaddingredient(nameingre : string,amountingre : number){
    const name =nameingre;
    const amount = amountingre;
    const ingredientss  = new Ingredients(name,amount);

    this.shoppingservice.ingredientevent(ingredientss);

  }



  

}
