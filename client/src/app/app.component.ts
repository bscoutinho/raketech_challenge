import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
        {
            label:'Review List',
            icon:'pi pi-fw pi-bookmark',
            routerLink:"/reviews"
        },
        {
          label:'Admin Panel',
          icon:'pi pi-fw pi-users',
          routerLink:"/admin"
      }
    ];
}    
}
