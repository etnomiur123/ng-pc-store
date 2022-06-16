import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IProduct } from 'src/app/shared/models/product';
import { products } from './products';

@Injectable()
export class ProductsService {

  private cartItems = new BehaviorSubject<IProduct[] | null>(null);

  cartItems$ = this.cartItems.asObservable();

  constructor() {}

  getProducts(): Observable<IProduct[]> {
    return of(products);
  }

  getProduct(productId: number): IProduct[]{
    return products.filter(product => product.id === productId);
  }

  addToCart(item: IProduct): void {
    cart.push(item);
  }

  getCart(): void {
    this.cartItems.next(cart);
  }
}

const cart: IProduct[] = [];

