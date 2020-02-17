import { Component, OnInit } from '@angular/core';
import { ApiService } from '../http/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getPost('test-post').subscribe(data => this.post = data);
  }

}
