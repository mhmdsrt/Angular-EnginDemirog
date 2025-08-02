import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: ProductComponent }, // hiçbir şey verilmezse varsayılan anasayfa
  { path: "products", component: ProductComponent } ,// URL adersine /products verilirse gösterilecek component
   { path: "products/category/:categoryId", component: ProductComponent } // :categoryId ifadesi categoryId isminde bir parametre geleceğini bildiriyoruz
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
