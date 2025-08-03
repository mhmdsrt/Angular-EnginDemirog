import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // DI için
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FormsModule } from '@angular/forms'; // form elemanlarını kullanabilmek için
import { FiterProductNamePipe } from './pipes/fiter-product-name.pipe';

import { ToastrModule } from 'ngx-toastr'; // notifacation için kullanıyoruz
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component'  // Notication'nun animasyonını hızladırıp güçlendirmek için   

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FiterProductNamePipe,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({ // Notification için sepete eklenince bildlrim göstermek için kullandıgımız tools
      positionClass: "toast-bottom-right" // Notification'u Alt-sağda göster
    }),
    BrowserAnimationsModule // Notication'nun animasyonını hızladırıp güçlendirmek için 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
