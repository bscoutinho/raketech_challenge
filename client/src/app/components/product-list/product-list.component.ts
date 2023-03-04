import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces';
import { ProductService } from 'src/app/services/productsservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  public products: Product[] = [];

  // inject services
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    // Get data from service with subscription
    this.productService.getData().subscribe((data) => {
      this.products = data[575];
      console.log('Retrieving products: ', this.products);
      // order by res.position
      /* this.products = res.sort((a: Product, b: Product) => {
            return a.position - b.position;
          }); */
    });
  }

  //redirect to play page
  clickProduct(link: string) {
    location.href = link;
  }
}
