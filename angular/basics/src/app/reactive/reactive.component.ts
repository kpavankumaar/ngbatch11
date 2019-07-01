import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

function ratingFn(e:AbstractControl){
  var range = e.value;
  if(range < 0 && range > 10){
   return  {
      'watch':true
    }
  }
  return false;
}


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})

export class ReactiveComponent implements OnInit {

  constructor() { }
  customerInfo;
  ngOnInit() {
     this.customerInfo = new FormGroup({
       firstName: new FormControl(""),
       phone: new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
       emailId: new FormControl("",[Validators.required,Validators.email]),
      //  rating:new FormControl("",[Validators.required,Validators.max(10),Validators.min(1)])
      rating:new FormControl("",[Validators.required, ratingFn])
     });
  }
  testMthd(){
    console.log(this.customerInfo);
  }

}
