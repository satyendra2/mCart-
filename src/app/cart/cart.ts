import { Component } from '@angular/core';

@Component({
  selector: 'cart',
  templateUrl: './cart.html'
})
export class CartComponent  {  
  a:any[] = JSON.parse(localStorage.getItem("valCart"));
  products = [
    {id: 1, name: 1},
    {id: 2, name: 2},
    {id: 3, name: 3},
   ];
   address = {street1: "",
   product: this.products[0]};
             selection2 = this.address.product.id;
             message = {};   
             selectionChanged() {
              this.message = this.products[this.selection2 - 1].name;
             }       
}