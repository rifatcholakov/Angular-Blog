import { Component, OnInit, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { Post } from 'src/app/shared/interfaces/post';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class EditFormComponent implements OnInit {
  @ViewChild('postForm', { static: false }) postForm; 
  @ViewChild('richTextEditor', { static: false }) richTextEditor: RichTextEditorComponent; 
  editMode: boolean;
  text = '<p>Some Text Content</p>';

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.editMode = this.api.editMode;

    this.api.editMode = true;
    if(this.api.editMode) {
      let formData = {};
      const postId = this.route.snapshot.params['id'];

      this.api.getPost(postId).subscribe((data: Post) =>{
        this.postForm.setValue({
          title: data.title,
          imageUrl: data.imageUrl,
        });

        this.richTextEditor.updateValue(data.content);
      });
    }
  }

  onSubmit() {
    if(this.postForm.valid) {
      const post: Post = {
        title: this.postForm.controls.title.value,
        date: (new Date()).toLocaleDateString(),
        imageUrl: this.postForm.controls.imageUrl.value,
        content: this.richTextEditor.value
      }

      const id = post.title.split(' ').join('-').toLocaleLowerCase();

      this.api.editMode = false; 

      this.api.createPost(post, id);
    }
  }

}
