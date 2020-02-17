import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [
    FooterComponent, 
    NavigationComponent, 
    PostComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    PostComponent
  ]
})
export class CoreModule { }
