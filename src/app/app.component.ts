import { Component } from '@angular/core';
// Use mock data
// import { books as mockBooks } from './mocks/books';
import { Book } from './models/book';

@Component({
  selector: 'app-book-store',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'Bookstore by Hackages';

  // Use mock data
  books: Book[] = [];

  search(term) {
    // Implement the search function
  }
}
