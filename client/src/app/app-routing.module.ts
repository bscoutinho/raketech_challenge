import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

// Routes configuration
const routes: Routes = [
  { path: '', redirectTo: 'reviews', pathMatch: 'full' },
  { path: 'reviews', component: ProductListComponent },
  { path: 'reviews/:id', component: ReviewsComponent },
  { path: 'admin', component: AdminPanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
