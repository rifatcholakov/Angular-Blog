import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditFormComponent } from './edit-form/edit-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';


@NgModule({
  declarations: [EditFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    RichTextEditorModule
  ],
  exports: [
    EditFormComponent
  ]
})
export class MyformsModule { }
