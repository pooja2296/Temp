import { Component, OnInit } from '@angular/core';
import { Iusers } from '../../model/services/data';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersdata !: Iusers [];
  selectedUser :number = 1;
  constructor(private userService : UsersService) { }

  ngOnInit(): void {
    this.usersdata = this.userService.getAllUsers()
  }

}
