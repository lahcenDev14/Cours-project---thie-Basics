import { Component, OnInit } from '@angular/core';
import {Ingredients} from '../shared/ingredients.model';
import {ShoppingListService} from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{

  ingredient: Ingredients[];

  constructor(private shoppingservice:ShoppingListService){

  }

  ngOnInit(){
        this.ingredient = this.shoppingservice.ingredient;
  }


  



}
