import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  @Input("list") list : any[];

  selectedUsers = [];

  constructor() { }

  ngOnInit(): void {
  }

  searchUser(event)
    {
      this.selectedUsers = this.list.filter((item)=>{
        return event.target.value === item.username;
      })
    }

}
