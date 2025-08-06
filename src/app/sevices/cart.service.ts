import { Injectable } from '@angular/core';
import { Product } from '../models/products';
import { CartItems } from '../models/cartItems';
import { CartItem } from '../models/cartItem';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  /*
  Const olarak oluşturduğumuz CartItem'lerin tutuldugu CartItems dizisinde eğer ürün varsa
  quantity(miktar) değerini 1 arttır eğer yoksa CartItems dizisine ekle
   */
  addToCart(_product: Product) {
    let cartItem = CartItems.find(cartItem => {
      return cartItem.product.productId === _product.productId // süslü parantez actıgımız için return etmek zorunda kaldık
    })
    if (cartItem != null) {
      cartItem.quantity += 1;
    }
    else {
      let _cartItem = new CartItem();
      _cartItem.quantity = 1;
      _cartItem.product = _product;
      CartItems.push(_cartItem);
    }
  }

  getCartItemsList(): CartItem[] {
    return CartItems;
  }

  removeCardFromCarItemsList(_product: Product) {
    let cartItem = CartItems.find(cartItem=>cartItem.product.productId === _product.productId);
    if(cartItem!==null){
      CartItems.splice(CartItems.indexOf(cartItem),1);
    }
    /*
    splice(startIndex, deleteCount)
    startIndex: Nereden başlayacağını belirtir
    deleteCount: Kaç eleman sileceğini belirtir

    indexOf() metodu, JavaScript/TypeScript’te bir dizide belirli bir elemanın ilk geçtiği index’i döner. Eğer eleman dizide yoksa -1 döner.
     */
  }
}
