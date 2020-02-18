import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HeaderComponent } from './header/header.component';
import { environment } from '../../environments/environment';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  exports: [
    CommonModule,
    AngularFontAwesomeModule,
    HeaderComponent,
    RouterModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ]
})
export class SharedModule { }
