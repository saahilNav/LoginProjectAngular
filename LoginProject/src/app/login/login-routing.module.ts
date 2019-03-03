import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { OtpComponent } from './otp/otp.component';
import { ForgetComponent } from './forget/forget.component';
import { AuthGuardServiceService } from '../auth-guard-service.service';


const routes: Routes = [
  { path:'', component:LoginPageComponent,
canDeactivate:[AuthGuardServiceService]},
  { path:'otp',  component:OtpComponent},
  { path:'forgetP',   component:ForgetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
