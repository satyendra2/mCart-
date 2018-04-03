import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {cart} from './cartInterface';


@Component({
  selector: 'productDetails',
  templateUrl: './productDetails.html'
})
export class ProductDetailComponent { 

  constructor(private router: Router ){}
 


  item:any[] = JSON.parse(localStorage.getItem("key"));

     imageurlDemo: any=this.item[0].url;
        imagePrice: any = this.item[0].pPrice;


     getMobileByColor(color:string){
      
        let cartVal:cart =<any>{};
        cartVal.cartName = this.item[0].pName;
        cartVal.cartPrice = this.item[0].pPrice;
            
        switch(color){
            case 'gold': {
                this.imageurlDemo = this.item[0].url;
                this.imagePrice = this.item[0].pPrice;
                cartVal.cartName = this.item[0].pName;
                cartVal.cartPrice = this.item[0].pPrice;
            
                break;
            }
            case 'pink':{
                this.imageurlDemo = this.item[0].pinkmobileUrl;
                this.imagePrice = this.item[0].pinkmobilePrice;
                cartVal.cartName = this.item[0].pName;
                cartVal.cartPrice = this.item[0].pinkmobilePrice;
             
                break;
            }
            case 'silver': {
                this.imageurlDemo = this.item[0].silvermobileUrl;
                this.imagePrice = this.item[0].silvermobilePrice;
                cartVal.cartName = this.item[0].pName;
                cartVal.cartPrice = this.item[0].silvermobilePrice;

                break;
            }
            default: {
                this.imageurlDemo = this.item[0].url;
                break;
            }
        }
     
        localStorage.setItem('valCart',JSON.stringify(cartVal));
  
}
addtoCart(){
   
  this.router.navigate(['/cart']);
  }}