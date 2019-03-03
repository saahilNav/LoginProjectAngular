import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { OtpComponent } from './otp/otp.component';
import { ForgetComponent } from './forget/forget.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    LoginPageComponent, 
    OtpComponent, 
    ForgetComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
]
})
export class LoginModule { }
