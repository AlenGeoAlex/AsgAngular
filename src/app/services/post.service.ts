import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../interfaces/IPost";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public readonly postObs$: Observable<IPost[]>;

  constructor(private readonly client: HttpClient) {
    this.postObs$ = client.get<IPost[]>("https://jsonplaceholder.typicode.com/posts");
  }

}

