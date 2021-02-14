import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from 'src/app/shared/models/product';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return of(products);
  }
}

const products: IProduct[] = [
  {
    id: 1,
    name:
      "Portátil HP PAVILION 14-CE3014NP  (14'' - Intel Core i7-1065G7 - RAM: 16 GB - 1 TB SSD - NVIDIA GeForce MX250)",
    img: 'assets/imgs/Portátil HP PAVILION 14-CE3014NP.webp',
    price: '€1199,00',
  },
  {
    id: 2,
    name:
      "Portátil HUAWEI Matebook D (15.6'' - AMD Ryzen 5 3500U - RAM: 8 GB - 256 GB SSD - AMD Radeon Vega 8)",
    img: 'assets/imgs/Portátil HUAWEI Matebook D.webp',
    price: '€649,00',
  },
  {
    id: 3,
    name:
      "Portátil ASUS UX393EA-71DXEPP1 (13.9'' - Intel Core i7-1165G7 - RAM: 16 GB - 1 TB SSD - Intel Iris Xe Graphics)",
    img: 'assets/imgs/Portátil ASUS UX393EA-71DXEPP1.webp',
    price: '€1799,00',
  },
  {
    id: 4,
    name:
      "Portátil HUAWEI MateBook X Pro 2020 (13.9'' - Intel Core i7-10510U - RAM: 16 GB - 1 TB SSD - NVIDIA GeForce MX250)",
    img: 'assets/imgs/Portátil HUAWEI MateBook X Pro 2020.webp',
    price: '€1599,00',
  },
  {
    id: 5,
    name:
      "Portátil MSI Prestige 15 A11SCS-200PT (15.6'' - Intel Core i7-1185G7 - RAM: 16 GB - 1 TB SSD - NVIDIA GeForce GTX 1650 Ti)",
    img: 'assets/imgs/Portátil MSI Prestige 15 A11SCS-200PT.webp',
    price: '€1599,00',
  },
];
