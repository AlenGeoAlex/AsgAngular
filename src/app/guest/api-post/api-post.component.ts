import { Component, OnInit } from '@angular/core';
import {IPost} from "../../interfaces/IPost";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-api-post',
  templateUrl: './api-post.component.html',
  styleUrls: ['./api-post.component.scss']
})
export class ApiPostComponent implements OnInit {
  post: IPost[] | undefined;
  constructor(private readonly postService: PostService) {
    this.post = undefined;
  }

  ngOnInit(): void {
    this.postService.postObs$.subscribe({
      next: value => {
        this.post = value;
      },
      error: err => {

      },
      complete: () => {

      }
    })
  }

}
