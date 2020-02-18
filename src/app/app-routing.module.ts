import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditFormComponent } from './modules/myforms/edit-form/edit-form.component';
import { PostComponent } from './core/post/post.component';
import { HomeComponent } from './modules/pages/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new-post', component: EditFormComponent },
  { path: 'post/:id', component: PostComponent},
  { path: 'edit/:id', component: EditFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
