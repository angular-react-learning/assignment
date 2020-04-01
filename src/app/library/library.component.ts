import { Component, OnInit } from '@angular/core';

import { LibraryService } from '../library.service'

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  books = [];
  createdOn = new Date().toISOString();
  constructor(private libraryService : LibraryService) { }

  ngOnInit(): void {
    this.books = this.libraryService.books;
  }

}
