import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/api/products.service/products.service';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  products$: Observable<IProduct[]> | undefined;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }
}
