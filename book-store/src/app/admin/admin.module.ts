import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { SharedModule } from '../shared/shared.module';
import { BookComponent } from './services/book/book.component';

@NgModule({
  declarations: [BookListComponent, BookFormComponent, BookComponent],
  imports: [CommonModule, SharedModule],
})
export class AdminModule {}
