import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditFormComponent } from './edit-form/edit-form.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [EditFormComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    EditFormComponent
  ]
})
export class MyformsModule { }
