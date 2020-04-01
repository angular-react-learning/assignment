import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserInfoService } from "../user-info.service"

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private userInfoService : UserInfoService) { }



  // @Output() save = new EventEmitter<{}>();

  ngOnInit(): void {
  }

  saveUser(form : NgForm)
    {
        this.userInfoService.add(form.value);
      // this.save.next(form.value)
    }

}
