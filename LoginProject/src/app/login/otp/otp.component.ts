import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AuthGuardServiceService } from 'src/app/auth-guard-service.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  otpform:FormGroup;
  // otp:string='';



  constructor(private router:Router,private toaster:ToastrManager,private l:AuthGuardServiceService) {
   
   }

  ngOnInit() {
    this.otpform=new FormGroup ({
      otpCode:new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(4)
     ])),
    })
  }


otpdataToHome(otpform){
  console.log("this is router");
  if(otpform.otpCode =='1234'){
    this.toaster.successToastr('your otp code is successful');
    localStorage.setItem("isLoggedIn" , "true");
    this.router.navigate(['home/homePage']);
  }else{
    this.toaster.errorToastr('your  otp code is invalid');
    console.log('otpCode is',otpform.otpCode)
    }
   
    }

}
