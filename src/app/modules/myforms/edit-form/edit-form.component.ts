import { Component, OnInit, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { Post } from 'src/app/shared/interfaces/post';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class EditFormComponent implements OnInit {
  @ViewChild('postForm', { static: false }) postForm; 
  @ViewChild('richTextEditor', { static: false }) richTextEditor: RichTextEditorComponent; 
  pageTitle: string;
  pageSubtitle: string;
  id: string;

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) {
    const urlPathStartsWithEdit = this.router.url.split('/').filter(el => el !== '')[0];
    this.api.editMode = urlPathStartsWithEdit === 'edit' ? true : false; 

    this.pageTitle = this.api.editMode ? 'Edit post' :'Create new post' ;
    this.pageSubtitle = this.api.editMode ? 'Write without fear. Edit without mercy.' : 'You can always edit a bad page. You can’t edit a blank page.';
  }

  ngOnInit() {
    if(this.api.editMode) {
      const postId = this.route.snapshot.params['id'];

      this.api.getPost(postId).subscribe((data: Post) =>{
        if(!data) {
          this.api.errorMessage = "The post you're looking to edit doesn't exist yet :(";
          this.router.navigate(['/not-found']);
        }

        this.postForm.setValue({
          title: data.title,
          imageUrl: data.imageUrl,
        });

        this.richTextEditor.updateValue(data.content);

        this.id = postId;
      });
    }
  }

  onSubmit() {
    if(this.postForm.valid) {
      const post: Post = {
        title: this.postForm.controls.title.value,
        date: (new Date()).toLocaleDateString(),
        imageUrl: this.postForm.controls.imageUrl.value,
        content: this.richTextEditor.value,
      } 

      if(this.api.editMode) {
        this.api.updatePost(post, this.id);
      } else {
        this.id = post.title.split(' ').join('-').toLocaleLowerCase(); 
        this.api.createPost(post, this.id);
      }

    }

  }

}
