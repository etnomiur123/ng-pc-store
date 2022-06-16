import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/api/products.service/products.service';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { IProduct } from 'src/app/shared/models/product';
import { Store } from '@ngrx/store';
import { selectors } from 'src/app/api/products.service/state/selectors';
import { AppState } from 'src/app/api/products.service/state/types';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  getProductsSub$ = new Subject();
  unsubscribe$ = new Subject();
  total = 0;
  cart: IProduct[] | null = null;

  constructor(private productService: ProductsService, private store: Store) {}

  ngOnInit(): void {
    this.productService.cartItems$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((x) => (this.cart = x));

    this.store
      .select(selectors.getCartItems)
      .pipe(
        map((state) => {
          console.log(state);
          return state as AppState;
        })
      )
      .subscribe((state) => (this.cart = state.cart));

    this.getTotal();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }

  getTotal(): void {
    if (this.cart) {
      this.total = this.cart.reduce((res, item) => {
        return (res += parseInt(item.price.split('€')[1], 10));
      }, 0);
    }
  }
}
