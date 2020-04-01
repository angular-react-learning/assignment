import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }



  @Output() save = new EventEmitter<{}>();

  ngOnInit(): void {
  }

  saveUser(form : NgForm)
    {
      this.save.next(form.value)
    }

}
