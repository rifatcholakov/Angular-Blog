import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './post/post.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';



@NgModule({
  declarations: [
    FooterComponent, 
    NavigationComponent, 
    PostComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    LoginComponent
  ]
})
export class CoreModule { }
