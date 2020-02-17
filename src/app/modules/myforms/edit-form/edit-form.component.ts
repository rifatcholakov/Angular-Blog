import { Component, OnInit, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
import { Post } from 'src/app/shared/interfaces/post';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class EditFormComponent implements OnInit {
  @ViewChild('postForm', { static: false }) postForm; 
  @ViewChild('postContent', { static: false }) postContent; 

  constructor() { }

  ngOnInit() {

  }

  onSubmit() {
    console.log();

    
    let post: Post = {
      title: this.postForm.controls.title.value,
      date: (new Date()).toLocaleDateString(),
      imageUrl: this.postForm.controls.imageUrl.value,
      content: this.postContent.value
    }
    

  }

}
