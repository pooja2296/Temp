import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 loggedIn : boolean = false;
  constructor() { }


  isAuthenticated(): Promise<boolean>{
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve(this.loggedIn)
      }, 200);
    })
  }

  logIn(){
    this.loggedIn = true;
  }
  logOut(){
    this.loggedIn = false;
  }
}
