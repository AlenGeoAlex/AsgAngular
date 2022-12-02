import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonComponentModule} from "./common/common-component.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthModule} from "./auth/auth.module";
import {HomeModule} from "./home/home.module";
import {AuthService} from "./services/auth.service";

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonComponentModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
