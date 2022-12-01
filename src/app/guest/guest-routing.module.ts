import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {AboutComponent} from "./about/about.component";
import {ApiPostComponent} from "./api-post/api-post.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "gallery", component: GalleryComponent},
  {path: "about", component: AboutComponent},
  {path: "api-post", component: ApiPostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
