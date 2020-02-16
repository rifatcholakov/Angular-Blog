import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [FooterComponent, NavigationComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NavigationComponent,
    FooterComponent
  ]
})
export class CoreModule { }
