import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks() {
    // new HttpClient();
    // calling api. (client->server communication)
    return this.http
      .get('http://localhost:3100/api/book')
      .pipe(map((res: any) => res));
  }
}