import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: any;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    const postId = this.route.snapshot.params['id'];

    this.api.getPost(postId).subscribe(data => this.post = data);
  }

}
