import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/book/models/book.model';
import { BookService } from 'src/app/book/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private bookService: BookService) {}

  books: BookModel[];

  ngOnInit(): void {
    this.books = [];
    const booksObservable = this.bookService.getBooks();
    booksObservable.subscribe(
      // result is available
      (result: BookModel[]) => {
        this.books = result;
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('Done');
      }
    );
  }
}
