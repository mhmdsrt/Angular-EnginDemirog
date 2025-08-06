import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: "", pathMatch: "full", component: ProductComponent }, // hiçbir şey verilmezse varsayılan anasayfa
  { path: "products/add", component: ProductAddComponent, canActivate: [LoginGuard] }, // ürün ekleyebilmesi için LoginGuardı geçmesi lazım
  { path: "products", component: ProductComponent },// URL adersine /products verilirse gösterilecek component
  { path: "products/category/:categoryId", component: ProductComponent }, // :categoryId ifadesi categoryId isminde bir parametre geleceğini bildiriyoruz
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
