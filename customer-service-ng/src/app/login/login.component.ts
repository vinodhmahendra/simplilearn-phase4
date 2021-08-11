import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'simplilearn';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  //dependency injection
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.username === 'simplilearn' && this.password === 'simplilearn') {
      //navigate welcome component (router)
      this.router.navigate(['welcome']);
      this.invalidLogin = false;

    } else {
      this.invalidLogin = true;
      //nvaigate to  error component
    }
  }

}
