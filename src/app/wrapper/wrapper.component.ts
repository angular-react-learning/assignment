import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  list : any = [];
  constructor() { }

  ngOnInit(): void {
  }

  addUserToList(user)
    {
      this.list.push(user);
    }

}
