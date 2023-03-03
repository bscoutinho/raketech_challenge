import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { ProductService } from './services/productsservice';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    ReviewListComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    RatingModule,
    ButtonModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
