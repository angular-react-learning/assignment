import { Component, OnInit, Input } from '@angular/core';
import { UserInfoService } from "../user-info.service"

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  // @Input("list") list : any[];

  selectedUsers = [];

  constructor(private userInfoService : UserInfoService) { }

  ngOnInit(): void {
    this.userInfoService.getList().subscribe((list)=>{
      this.selectedUsers = list;
      console.log(this.selectedUsers);
    })

  }



  // searchUser(event)
  //   {
  //     this.selectedUsers = this.list.filter((item)=>{
  //       return event.target.value === item.username;
  //     })
  //   }

}
