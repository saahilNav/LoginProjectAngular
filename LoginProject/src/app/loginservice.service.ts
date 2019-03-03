import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {forkJoin,of} from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  value="heloo";
  value1="heloo1";
  value2="heloo2"

  constructor(private http:HttpClient) { }

   isAuthenticated(): any {
     debugger;
    return localStorage.getItem('isLoggedIn');
  }
  isDeAuthenticated(): any {
    debugger;
   return localStorage.getItem('isLoggedOut');
 }

observalData():Observable<any>{
  let response1 =of(this.value);
  let response2 = of(this.value1 );
  let response3 = of(this.value1);
  return forkJoin([response1, response2, response3]);

}

promiseData():Promise<any>{
  let response1 =Promise.resolve(this.value);
  let response2 = Promise.resolve(this.value1 );
  let response3 = Promise.resolve(this.value1);
  return Promise.all([response1, response2, response3]);

}

// numberPromise.then(value => console.log(value));


numberObservable = new Observable((observer) => {
  observer.next(20);
  observer.next(25);
});


}
