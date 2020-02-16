import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    AngularFontAwesomeModule
  ],
  exports: [
    AngularFontAwesomeModule,
    HeaderComponent
  ]
})
export class SharedModule { }
