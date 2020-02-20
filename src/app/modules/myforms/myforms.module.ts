import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditFormComponent } from './edit-form/edit-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { FormsModule } from '@angular/forms';
import { PortfolioFormComponent } from './portfolio-form/portfolio-form.component';

@NgModule({
  declarations: [EditFormComponent, PortfolioFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RichTextEditorModule
  ],
  exports: [
    EditFormComponent,
    PortfolioFormComponent
  ]
})
export class MyformsModule { }
