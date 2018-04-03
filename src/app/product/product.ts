import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'product',
  templateUrl: './product.html'
})
export class ProductComponent { 

  appList: any[] = [ {
    "url": 'assets/Images/applegold.jpg', 
    "price": "50000",
      "name": 'Apple'
   },

   {
    "url": 'assets/Images/lggold.jpg',  
    "price": "25000",
      "name": 'LG'
   },
    {
      "url": 'assets/Images/samsunggold.jpeg',
     "price": "30000",
      "name": 'samsung'
   }
 ];

 constructor(private router: Router){}
  productList:any[] = [ {
    "url": 'assets/Images/applegold.jpg',
    "pId":1,
    "pName": 'Apple', 
    "pPrice": "55000",
      "pAvailable": 'Available',
      "pDiscount":"15%",
      "pinkmobileUrl":'assets/Images/applepink.jpeg',
      "goldmobileUrl":'assets/Images/applegold.jpg',
      "silvermobileUrl":'assets/Images/applesilver.jpg',
      "goldmobilePrice":"55000",
      "pinkmobilePrice":"50000",
      "silvermobilePrice":"48000",
   },
{
  "url": 'assets/Images/lggold.jpg',
  "pId":2,
    "pName": 'LG', 
    "pPrice": "25000",
      "pAvailable": 'Available',
      "pDiscount":"10%",
      "pinkmobileUrl":'assets/Images/lgpink.jpg',
      "goldmobileUrl":'assets/Images/lggold.jpg',
      "silvermobileUrl":'assets/Images/lgsilver.jpg',
      "goldmobilePrice":"25000",
      "pinkmobilePrice":"23000",
      "silvermobilePrice":"21000",
   },
    {
      "url": 'assets/Images/samsunggold.jpeg',
      "pId":3,
    "pName": 'samsung', 
    "pPrice": "30000",
      "pAvailable": 'Available',
      "pDiscount":"20%",
      "pinkmobileUrl":'assets/Images/samsungpink.jpeg',
      "goldmobileUrl":'assets/Images/samsunggold.jpeg',
      "silvermobileUrl":'assets/Images/samsungsilver.jpeg',
      "goldmobilePrice":"30000",
      "pinkmobilePrice":"29000",
      "silvermobilePrice":"28000",
   }
    ];
  getProductDetails(id:number){
     let items:any[] = this.productList.filter(x => {return x.pId == id})
   localStorage.setItem("key", JSON.stringify(items));
   this.router.navigate([]);
  // console.log(items)
}
  
}