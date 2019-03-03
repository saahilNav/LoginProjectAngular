import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {

  forgetpasword:FormGroup;
  // otp:string='';




  

  constructor(private router:Router,private toaster:ToastrManager) { }

  ngOnInit() {
    this.forgetpasword=new FormGroup ({
      email:new FormControl("",Validators.required),
     username:new FormControl("", Validators.compose([
      Validators.required,
      Validators.minLength(6)
   ])),
    })
  }

  back(){
    window.history.back();
  }

  forgetpaswordMe(passwd){
       this.toaster.successToastr("We've emailed you instructions on how to reset your password.If you don't see it, don't forget to check your spam folder." )
       this.router.navigate(['login']);
     
      }

}
