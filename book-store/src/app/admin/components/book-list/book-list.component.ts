import { Component, OnInit, Input } from '@angular/core';
import { BookModel } from 'src/app/book/models/book.model';
import { BookService } from 'src/app/book/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input() books: BookModel[];

  constructor(private bookService: BookService) { }

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
