import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IFLogin} from "../interfaces/IFLogin";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  readonly formGroup: FormGroup;
  invalid: boolean = false;
  constructor(private readonly router: Router, private readonly fb: FormBuilder, private readonly aService: AuthService) {
    this.formGroup = fb.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required],
      }
    )
  }

  ngOnInit(): void {
    console.log(this.aService.getCred());
  }

  submit(loginCred: IFLogin) {
    if(loginCred.username === "" || loginCred.password === "")
      return;

    const login = this.aService.login(loginCred);
    if(!login){
      this.invalid = true;
      return;
    }
  }
}
