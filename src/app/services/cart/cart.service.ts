import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/models/cartitem';
import { CartItems } from 'src/app/models/cartItems';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(product: Product) {
    let item = CartItems.find((c) => c.product.productId === product.productId);

    if (item) {
      item.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }

  removeFromCart(product: Product) {
    let item: CartItem = CartItems.find(
      (c) => c.product.productId === product.productId
    );
    CartItems.splice(CartItems.indexOf(item), 1);
  }

  listCart(): CartItem[] {
    return CartItems;
  }
}
