import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { ProductService } from './services/productsservice';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AdminPanelComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    RatingModule,
    ButtonModule,
    PanelModule,
    CardModule,
    ToastModule
  ],
  providers: [ProductService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
