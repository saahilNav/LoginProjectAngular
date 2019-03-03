import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
 

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
 signUpform:FormGroup;
  email:string='';
  password:string='';
  showPage:boolean=false;
  isLoggenIn: boolean=false;
  constructor(private router: Router,private route:ActivatedRoute,private toastr: ToastrManager) {
    
   }

   passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
       return {"passwd" : true};
    }
 }

  ngOnInit() {
    this.signUpform=new FormGroup({
  
      emailid:new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(6)
     ])),
      password:new FormControl("", Validators.required),
        })
  }

  postData(signupForm){
  console.log(signupForm.emailid);
      if (signupForm.emailid=="sahil@gmail.com" && signupForm.password=="navi@123") {
        this.toastr.successToastr("Login Successful");
         this.router.navigate(['./otp'],{ relativeTo: this.route });   
          } 
          else 
          {
            this.toastr.errorToastr("Invalid Login");
         return false;
  
          }
  
  }

  forgetPassword(){
    this.router.navigate(['./forgetP'],{ relativeTo: this.route });
  }

}
