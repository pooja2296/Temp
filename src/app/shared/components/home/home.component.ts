import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router,
    private authService : AuthService) { }
  ngOnInit(): void {
  }
  gotoproducts(){
    this.router.navigate(['/products'])
  }
  LogInToApp(){
      this.authService.logIn()
  }
  LogOutFromApp(){
      this.authService.logOut()
  }
}
