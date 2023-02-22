import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './pages/book-list/book-list/book-list.component';
import { BookReviewComponent } from './pages/book-review/book-review/book-review.component';
import { NewBookComponent } from './pages/new-book/new-book/new-book.component';

const routes: Routes = [
  {
    path: 'book-list',
    component: BookListComponent
  },
  {
    path: 'new-book',
    component: NewBookComponent
  },
  {
    path: 'review-book',
    component: BookReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
