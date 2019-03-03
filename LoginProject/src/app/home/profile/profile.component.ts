import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/loginservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  valueData2: any;
  valueData1: any;
  valueData3: any;
  promiseData: any;

  constructor(private interservice:LoginserviceService) { 
    this.interservice.promiseData().then((response)=>{
      this.promiseData=response;
      console.log("this is promise" ,this.promiseData)
    });
   
  }

  ngOnInit() {
    this.interservice.observalData().subscribe(response=>{
     console.log("this obseravble",response)
      this.valueData1=response[0];
      this.valueData2=response[1];
      this.valueData3=response;});

    
  }

}
