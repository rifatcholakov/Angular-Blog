import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditFormComponent } from './modules/myforms/edit-form/edit-form.component';
import { PostComponent } from './core/post/post.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { ErrorComponent } from './modules/pages/error/error.component';
import { BlogComponent } from './modules/pages/blog/blog.component';
import { AboutComponent } from './modules/pages/about/about.component';
import { LoginComponent } from './core/authentication/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RegisterComponent } from './core/authentication/register/register.component';
import { SecureInnerPagesGuard } from './core/guards/secure-inner-pages.guard';
import { PortfolioComponent } from './modules/pages/portfolio/portfolio.component';
import { PortfolioFormComponent } from './modules/myforms/portfolio-form/portfolio-form.component';
import { ContactComponent } from './modules/pages/contact/contact.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'new-portfolio-item', component: PortfolioFormComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'new-post', component: EditFormComponent, canActivate: [AuthGuard] },
  { path: 'post/:id', component: PostComponent},
  { path: 'edit/:id', component: EditFormComponent, canActivate: [AuthGuard] },
  { path: 'not-found', component: ErrorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
