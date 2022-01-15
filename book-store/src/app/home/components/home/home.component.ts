import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/book/models/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  books: BookModel[];

  ngOnInit(): void {
    this.books = [];
    let book = new BookModel();
    book.id = 1;
    book.author = 'Bill Lubanovic';
    book.name = 'Introducing Python, 2nd Edition';
    book.price = 200;
    book.imgSrc =
      'https://learning.oreilly.com/library/cover/9781492051374/250w/';
    this.books.push(book);

    let book2 = new BookModel();
    book2.id = 2;
    book2.author = 'Aurélien Géron';
    book2.name = 'Hands-On Machine Learning';
    book2.imgSrc =
      'https://learning.oreilly.com/library/cover/9781492032632/250w/';
    this.books.push(book2);
  }
}
