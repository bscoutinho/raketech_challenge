import { Component, HostListener } from '@angular/core';
import { Product } from 'src/app/interfaces';
import { ProductService } from 'src/app/services/productsservice';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent {
  public products: Product[] = [];
  public draggingIndex: number | undefined;
  public mobile: boolean = false;

  // Listener for window resize event to change mobile variable
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.mobile = event.target.innerWidth <= 959 ? true : false;
  }

  // inject services
  constructor(
    private productService: ProductService,
    public messageService: MessageService
  ) {}

  ngOnInit() {
    // Check if mobile when app starts
    this.mobile = document.body.offsetWidth <= 959 ? true : false;

    // Get data from service with subscription
    this.productService.getData().subscribe((data) => {
      this.products = data[575];
    });
  }

  saveList() {
    // try catch with saveData function
    try {
      this.productService.saveData(this.products);
      this.addSingle();
    } catch (error) {
      console.log(error);
    }
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

  //redirect to play page
  clickProduct(link: string) {
    location.href = link;
  }

  // Toast function
  addSingle() {
    this.messageService.add({
      severity: 'success',
      summary: 'Message',
      detail: 'List reordered and saved!',
    });
  }
}
