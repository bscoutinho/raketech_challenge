import { Component, HostListener } from '@angular/core';
import { Product } from 'src/app/interfaces';
import { ProductService } from 'src/app/services/productsservice';
import { Router } from '@angular/router';
import { Observable, startWith, throttleTime } from 'rxjs';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  public products: Product[] = [];
  public mobile: boolean = false;

  // Listener for window resize event to change mobile variable
  @HostListener('window:resize', ['$event'])
	onResize(event: any) {
    this.mobile = event.target.innerWidth <= 959 ? true : false;
	}

  // inject services
  constructor(private productService: ProductService) {}

  ngOnInit() {

    // Check if mobile when app starts
    this.mobile = document.body.offsetWidth <= 959 ? true : false;

    // Get data from service with subscription
    this.productService.getData().subscribe((data) => {
      this.products = data[575];
      console.log('Retrieving products: ', this.products);
    });
  }

  //redirect to play page
  clickProduct(link: string) {
    location.href = link;
  }
}
