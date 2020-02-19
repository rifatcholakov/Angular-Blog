import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {
  post: any;
  postId: string;
  getPostSubscription: Subscription;

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
    this.postId = this.route.snapshot.params['id'];

    this.getPostSubscription = this.api.getPost(this.postId).subscribe(
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
  }

  ngOnDestroy() {
    this.getPostSubscription.unsubscribe();
  }
}
