import { Component, OnInit } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class EditFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
