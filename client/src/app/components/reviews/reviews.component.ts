import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {

  productId: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Get data from service with subscription
    this.route.params.subscribe(params => {
      this.productId = params['id'];
    });
  }

  

}
