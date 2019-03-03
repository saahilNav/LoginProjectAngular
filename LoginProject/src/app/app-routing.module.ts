import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './login-layout/login-layout.component';


const routes: Routes = [
  {path:'login',component:LoginLayoutComponent, loadChildren:'./login/login.module#LoginModule',},
  {path:'home',component:LoginLayoutComponent, loadChildren:'./home/home.module#HomeModule',},
  {path:'',redirectTo:'/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
