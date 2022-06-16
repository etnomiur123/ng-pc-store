import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { first } from 'rxjs/operators';
import { ProductsService } from 'src/app/api/products.service/products.service';
import { actions } from 'src/app/api/products.service/state/actions';
import { AppState } from 'src/app/api/products.service/state/types';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  product: IProduct | null = null;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.product = this.productService.getProduct(Number(id))[0];
  }

  addToCart(): void {
    if (this.product) {
      this.productService.addToCart(this.product);

      this.store.dispatch(actions.ADDCART(this.product));
    }
  }
}
