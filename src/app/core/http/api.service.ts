import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  posts: Array<any>

  constructor(private db: AngularFirestore) { }

  getPosts() {
    return this.db.collection('posts').valueChanges();
  }

  getPost(postId) {
    return this.db.collection('posts').doc(postId).valueChanges();
  }

}
