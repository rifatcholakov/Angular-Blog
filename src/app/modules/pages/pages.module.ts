import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ErrorComponent } from './error/error.component';
import { BlogComponent } from './blog/blog.component';



@NgModule({
  declarations: [
    HomeComponent,
    ErrorComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    ErrorComponent,
    BlogComponent
  ]
})
export class PagesModule { }
