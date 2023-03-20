import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private authService:AuthService, 
    private router: Router) { }

  ngOnInit(): void {
  }
  logOutFromApp(){
      this.authService.logOut();
      this.router.navigate(['/'])
  }
}
