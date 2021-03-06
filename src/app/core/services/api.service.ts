import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  posts: Array<any>;
  editMode: boolean = false;
  errorMessage:string;

  constructor(private db: AngularFirestore, private router: Router) { }

  // Post Operations

  getPosts() {
    return this.db.collection('posts').valueChanges();
  }

  getPost(postId) {
    return this.db.collection('posts').doc(postId).valueChanges();
  }

  createPost(post, id) {
    this.db.collection('posts').doc(id).set(post).then(
      () => this.router.navigate(['post', id])
    );
  }

  updatePost(post, id) {
    this.db.collection('posts').doc(id).update(post).then(
      () => this.router.navigate(['post', id])
    );
  }

  deletePost(id) {
    this.router.navigate(['/']);
    this.db.collection('posts').doc(id).delete();
  }

  // Portfolio Operations

  createPortfolioItem(post, id) {
    this.db.collection('portfolioItems').doc(id).set(post).then(
      () => this.router.navigate(['portfolio'])
    );
  }

  getPortfolioItems() {
    return this.db.collection('portfolioItems').valueChanges();
  }

  deletePortfolioItem(id) {
    this.db.collection('portfolioItems').doc(id).delete().then(() => this.router.navigate(['/portfolio']));
  }

}
