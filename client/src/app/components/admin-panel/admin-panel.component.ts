import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces';
import { ProductService } from 'src/app/services/productsservice';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent {

  public products: Product[] = [];
  public draggingIndex: number | undefined;

  // inject services
  constructor(private productService: ProductService) {}

  ngOnInit() {
    // Get data from service with subscription
    this.productService.getData().subscribe((data) => {
      this.products = data[575];
    });
  }

  saveList() {
    console.log('product reordered: ',this.products);
    this.productService.saveData(this.products);
  }

  // handle drag and drop changes reordering list
  private _reorderItem(fromIndex: number, toIndex: number): void {
    const itemToBeReordered = this.products.splice(fromIndex, 1)[0];
    this.products.splice(toIndex, 0, itemToBeReordered);
    this.draggingIndex = toIndex;
  }


  // Drag and drop functions
  onDragStart(index: number): void {
    this.draggingIndex = index;
  }
  
  onDragEnter(index: number): void {
    if (this.draggingIndex !== index) {
      this._reorderItem(this.draggingIndex as number, index);
    }
  }

  onDragEnd(): void {
    this.draggingIndex = undefined;
  }

  
}
