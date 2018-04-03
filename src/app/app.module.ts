import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { ProductComponent } from './product/product';
import { ProductDetailComponent } from './product/productDetails';
import { CartComponent } from './cart/cart';
import { CheckoutComponent } from './checkout/checkout';
import { aboutComponent } from './about/about';
import { contactComponent } from './contact/contact';





@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent,
    aboutComponent,
    contactComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
