import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login.component";
import {AccessGuardGuard} from "./access-guard.guard";

const routes: Routes = [
  {
    path: "guest", loadChildren: () => import('./guest/guest.module').then(module => module.GuestModule)
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "**", redirectTo: "guest"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
