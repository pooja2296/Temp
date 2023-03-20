import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iusers } from 'src/app/shared/model/services/data';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userId :number = 1;
  userDetails !: Iusers;
  constructor(private userService : UsersService,
  private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
                .subscribe((param: Params)=> {
                  this.userId = +param['id'];
                  this.userDetails = this.userService.getSingleuser(this.userId)!;
                })
              }

            }
