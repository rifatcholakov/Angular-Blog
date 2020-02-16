import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditFormComponent } from './modules/myforms/edit-form/edit-form.component';


const routes: Routes = [
  { path: 'new-post', component: EditFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
