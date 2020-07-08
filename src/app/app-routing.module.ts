import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'about', component:AboutComponent},
  {path: 'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
