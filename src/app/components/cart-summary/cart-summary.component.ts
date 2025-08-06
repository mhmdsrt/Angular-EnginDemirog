import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/products';
import { CartService } from 'src/app/sevices/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems: CartItem[];
  constructor(private cartService: CartService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCartItemList();
  }

  getCartItemList(): CartItem[] {
    return this.cartService.getCartItemsList();
  }

  getRemoveCartItemFromCartItemList(product: Product) {
    this.cartService.removeCardFromCarItemsList(product);
    this.toastrService.error("Sepetten silindi:",product.productName)
  }

}
