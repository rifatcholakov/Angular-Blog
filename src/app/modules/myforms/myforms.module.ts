import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditFormComponent } from './edit-form/edit-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EditFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RichTextEditorModule
  ],
  exports: [
    EditFormComponent
  ]
})
export class MyformsModule { }
