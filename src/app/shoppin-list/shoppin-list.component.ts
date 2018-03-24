import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../list-service.service';

@Component({
  selector: 'app-shoppin-list',
  templateUrl: './shoppin-list.component.html',
  styleUrls: ['./shoppin-list.component.css']
})
export class ShoppinListComponent implements OnInit {

 shoppingList:any[];
 title:string = 'ADD YOUR ITEMS HERE';
 hideForm:boolean;
 itemToFrom:any;

  constructor(private listServiceService: ListServiceService) { }

  ngOnInit() {
      this.itemToFrom = {
          name: '',
          quantity: null,
          price: null,
          description:''
      };
      this.hideForm = true;
      this.listServiceService.getList().subscribe(data => {
          this.shoppingList = data.resolve;
      });
  }

  deleteItem(e, itemId) {
      e.stopPropagation();
      this.shoppingList =  this.shoppingList.filter(item => {
          if(item.id != itemId){
            return item;
          }
      });
  }

  itemCollected(e,itemId) {
        e.stopPropagation();
        this.shoppingList =  this.shoppingList.map(item => {
           if(item.id === itemId){
             item.collected = !item.collected;
           }
           return item;
        });
  }

  opemEditComponent(e,itemId) {
        e.stopPropagation();
        if(itemId != 'newItem') {
          //open edit with input
          this.itemToFrom = this.shoppingList.find(item => {
            if(item.id  == itemId) {
              return item
            }
          })
             this.hideForm = false;
        }
        else {
          //open edit with empty input
          this.itemToFrom = {
              name: '',
              quantity: null,
              price: null,
              description:'',
          };
          this.hideForm = false;
        }
  }

  emitedDataHandler(emitedObject){
      //close form
       this.hideForm = true;
       //if edit
       if(emitedObject.id) {
        this.shoppingList =  this.shoppingList.map(item => {
           if(item.id === emitedObject.id){
             item = emitedObject;
           }
           return item;
        });
       }
       else {
        //new item --> add
          emitedObject['id'] =  this.shoppingList[this.shoppingList.length-1].id + 1 ;
          this.shoppingList.push(emitedObject);
       }
  }

}
