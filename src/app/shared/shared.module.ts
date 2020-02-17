import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HeaderComponent } from './header/header.component';
import { environment } from '../../environments/environment';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  exports: [
    AngularFontAwesomeModule,
    HeaderComponent
  ]
})
export class SharedModule { }
