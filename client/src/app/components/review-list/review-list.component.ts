import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces';
import { ProductService } from 'src/app/services/productsservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent {

    public products: Product[] = [];
    public url: string = "";

    constructor(private productService: ProductService, private router: Router) { }

    ngOnInit() {
        // Get data from service with subscription
        this.productService.getData().subscribe(data => {
            
          let res: Product[] = data.toplists[575];

          // order by res.position
          this.products = res.sort((a: Product, b: Product) => {
            return a.position - b.position;
          });
          
            console.log('Retrieving products: ', this.products)
        });

        this.url = this.router.url;
        console.log('URL: ', this.url);
    }

    clickProduct(link: string) {
        console.log('Clicked product: ', link);
    }

}
