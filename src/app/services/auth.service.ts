import { Injectable } from '@angular/core';
import {IFLogin} from "../interfaces/IFLogin";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginData: IFLogin | undefined;
  private role: undefined | "ADMIN" | "STAFF" | "STUDENT" ;
  constructor(private readonly router: Router) { }

  login(cred: IFLogin): boolean{
    this.loginData = undefined;
    this.role = undefined;
    if(cred.username === "admin" && cred.password === "Admin"){
      this.loginData = cred;
      this.role = "ADMIN";
    }

    if(cred.username === "staff" && cred.password === "Staff"){
      this.loginData = cred;
      this.role = "STAFF";
    }

    if(cred.username === "student" && cred.password === "Student"){
      this.loginData = cred;
      this.role = "STUDENT";
    }

    switch (this.role) {
      case undefined:
        return false;
      case "ADMIN":

        return true;
      case "STAFF":

        return true;
      case "STUDENT":

        return true;
      default:
    }

    return false;
  }

  getCred(): undefined | "ADMIN" | "STAFF" | "STUDENT" {
    return this.role;
  }

}
