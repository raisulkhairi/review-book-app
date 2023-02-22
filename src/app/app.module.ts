import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookListComponent } from './pages/book-list/book-list/book-list.component';
import { BookReviewComponent } from './pages/book-review/book-review/book-review.component';
import { AppRoutingRoutingModule } from './app-routing-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewBookComponent } from './pages/new-book/new-book/new-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookReviewComponent,
    NewBookComponent
  ],
  imports: [
    BrowserModule, MatFormFieldModule, RouterModule, NgbModule, FormsModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppRoutingRoutingModule]
})
export class AppModule { }
