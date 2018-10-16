import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { BookService } from '../../services/books.service';
import { Book } from '../../models/book';

@Component({
  selector: 'bs-book-detail',
  styleUrls: ['book-detail.component.css'],
  templateUrl: 'book-detail.component.html'
})
export class BookDetailComponent implements OnInit {
  book: Book;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {}

  save(): void {}

  goBack(): void {}
}
