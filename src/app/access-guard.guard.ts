import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterModule, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AccessGuardGuard implements CanActivate {

  constructor(private readonly service: AuthService, private readonly router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.service.getCred()){
      this.router.navigate([""]);
      return false;
    }

    if(!(route.data["role"] === this.service.getCred())){
      this.router.navigate([""]);
      return false;
    }else return true;

  }

}
