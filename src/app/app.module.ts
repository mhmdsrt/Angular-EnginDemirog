import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; // DI için
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // form elemanlarını kullanabilmek için
import { FiterProductNamePipe } from './pipes/fiter-product-name.pipe';

import { ToastrModule } from 'ngx-toastr'; // notifacation için kullanıyoruz
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component'  // Notication'nun animasyonını hızladırıp güçlendirmek için   
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FiterProductNamePipe,
    CartSummaryComponent,
    ProductAddComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({ // Notification için sepete eklenince bildlrim göstermek için kullandıgımız tools
      positionClass: "toast-bottom-right" // Notification'u Alt-sağda göster
    }),
    BrowserAnimationsModule, // Notication'nun animasyonını hızladırıp güçlendirmek için 
    ReactiveFormsModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } // yüm HTTP istekleri iiçin AuthInterceptor'ı uygula
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
