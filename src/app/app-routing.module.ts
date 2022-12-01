import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login.component";
import {AdminComponent} from "./home/admin.component";
import {AccessGuardGuard} from "./access-guard.guard";
import {StaffComponent} from "./home/staff.component";
import {StudentComponent} from "./home/student.component";

const routes: Routes = [
  {
    path: "", loadChildren: () => import('./guest/guest.module').then(module => module.GuestModule)
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "admin", component: AdminComponent, data: {role: "ADMIN"}, canActivate: [AccessGuardGuard]
  },
  {
    path: "staff", component: StaffComponent, data: {role: "STAFF"}, canActivate: [AccessGuardGuard]
  },
  {
    path: "student", component: StudentComponent, data: {role: "STUDENT"}, canActivate: [AccessGuardGuard]
  },
  {
    path: "**", redirectTo: "/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
