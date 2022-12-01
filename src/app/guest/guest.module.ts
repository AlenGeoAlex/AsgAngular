import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { HomeComponent } from './home/home.component';
import {CommonComponentModule} from "../common/common-component.module";
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ApiPostComponent } from './api-post/api-post.component';


@NgModule({
  declarations: [
    HomeComponent,
    GalleryComponent,
    AboutComponent,
    ApiPostComponent
  ],
  imports: [
    CommonModule,
    CommonComponentModule,
    GuestRoutingModule
  ]
})
export class GuestModule { }
