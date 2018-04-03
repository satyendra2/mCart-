import { Routes } from '@angular/router';


import { ProductComponent } from './product/product';
import { ProductDetailComponent } from './product/productDetails';
import { CartComponent } from './cart/cart';
import { CheckoutComponent } from './checkout/checkout';
import { aboutComponent } from './about/about';
import { contactComponent } from './contact/contact';

export const routes: Routes = [
 
  { path: '', component: ProductComponent },
   { path: 'product', component: ProductDetailComponent },
   { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'about', component: aboutComponent },
    { path: 'contact', component: contactComponent },
    
 
];