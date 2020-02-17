import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditFormComponent } from './modules/myforms/edit-form/edit-form.component';
import { PostComponent } from './core/post/post.component';


const routes: Routes = [
  { path: 'post/:id', component: PostComponent},
  { path: 'new-post', component: EditFormComponent },
  // { path: 'post', component: PostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
