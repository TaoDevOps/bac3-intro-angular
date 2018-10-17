import {Component} from '@angular/core';
// Use mock data
import {books as mockBooks} from './mocks/books';
import {Book} from './models/book';

@Component({
  selector: 'app-book-store',
  styleUrls: ['app.component.css'],
  template: `
    <!-- Start: Header component -->
    <h1>{{title}}</h1>
    <hr>
    <!-- End: Header component -->

    <!-- Start: List of books component -->
    <div id="search-component">
      <h4>Search in your library</h4>
      <input id="search-box" #searchInput (input)="search($event)"/>
    </div>
    <!-- End: List of books component -->

    <!-- Start: List of books component -->
    <h3>All Books ({{books.length}})</h3>
    <br>
    <hr>
    <div class="grid grid-pad" [class]="myClass">
      <a class="col-1-4" *ngFor="let book of books">
        <div class="module hero">
          <h4>{{book.title}}</h4>
        </div>
      </a>
    </div>
    <!-- End: List of books component -->
  `
})

export class AppComponent {
  title = 'Bookstore by Hackages 2';
  isValid = true;

  myClass = 'lol';

  // Use mock data
  books: Book[] = mockBooks;

  search(medol) {
    console.log(this);

    const lol = function () {
      console.log('this', this);
    }.bind(this);

    lol();

    // Implement the search function
    console.log('search', medol);
  }
}
