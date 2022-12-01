import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { StaffComponent } from './staff.component';
import { StudentComponent } from './student.component';
import {CommonComponentModule} from "../common/common-component.module";
import {NavbarComponent} from "../common/navbar/navbar.component";



@NgModule({
  declarations: [
    AdminComponent,
    StaffComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    CommonComponentModule
  ]
})
export class HomeModule { }
