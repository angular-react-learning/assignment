import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(form) {
    this.router.navigate(["/library"]);
  }

}
