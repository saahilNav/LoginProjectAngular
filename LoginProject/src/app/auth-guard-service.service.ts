import { Injectable } from '@angular/core';
import { LoginserviceService } from './loginservice.service';
import { Router,CanActivate ,CanDeactivate } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements CanActivate , CanDeactivate<LoginPageComponent>{

  constructor(private auth:LoginserviceService,private router:Router) { }
  
   canActivate(): boolean {
     debugger;
    if (this.auth.isAuthenticated()) {
      // this.router.navigate(['login']);
      console.log ('Welcome');

      return true;
     } else {
      return false;
     }
  
   }

   canDeactivate(){
     debugger;
    if (this.auth.isDeAuthenticated()) {
      // this.router.navigate(['login']);
      console.log ('logout');

      return false;
     } else {
      return true;
     }

   }
}
