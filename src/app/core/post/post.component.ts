import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: any;
  postId: string;

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.postId = this.route.snapshot.params['id'];

    this.api.getPost(this.postId).subscribe(
      (data) => { 
        this.post = data;
        
        if(!data) {
          this.router.navigate(['/not-found']);
        }
      },
      error => console.log(error)
    );
  }

  onEdit() {
    this.router.navigate(['/edit/', this.postId]);
  }

  onDelete() {
    this.api.deletePost(this.postId);
    this.router.navigate(['/']);
  }
}
