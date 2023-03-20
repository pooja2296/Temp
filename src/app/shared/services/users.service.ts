import { Injectable } from '@angular/core';
import { Iusers } from '../model/services/data';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
userArray : Iusers [] = [
  {
    userName: "pooja",
    userId : 1
  },
  {
    userName: "Aditya",
    userId : 2
  },
  { 
    userName: "Aarti",
    userId : 3
  }
]
  constructor() { }
  getAllUsers(){
    return this.userArray
  }
  getSingleuser(id:number){
    return this.userArray.find(user=>user.userId == id)
  }
}
