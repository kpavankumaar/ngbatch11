import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
function ratingFn(min:number, max:number){
  return function (e:AbstractControl):{[key:string]:boolean} | Boolean {
    var range = e.value;
    console.log(range);
    if(range <= min || range > max){
    return  {
        'watch':true
      }
    }
    return false;
  }
}

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})

export class ReactiveComponent implements OnInit,OnChanges {
  @Input() customData;
  constructor() { 
    console.log("reactive component constructor");
  }
  customerInfo;
  ngOnChanges(){
    console.log("on changes in reactivecomponent");
  }
  ngOnInit() {
     this.customerInfo = new FormGroup({
       firstName: new FormControl("Krishna"),
       notify: new FormControl(""),
       phone: new FormControl("",[Validators.maxLength(10),Validators.minLength(10)]),
       emailId: new FormControl("",[Validators.required, Validators.email]),

      //  rating:new FormControl("",[Validators.required,Validators.max(10),Validators.min(1)])
      rating:new FormControl("",[Validators.required, ratingFn(1,5)]),
      address:new FormGroup({
        houseno: new FormControl(),
        street: new FormControl(),
        city: new FormControl(),
        state: new FormControl(),
      })
     });
  }
  testMthd(){
    console.log(this.customerInfo);
  }
  chooseEmailOrPhoneNotification(){
    var notifiedVal = this.customerInfo.get('notify');
    var phone = this.customerInfo.get("phone");
    var email = this.customerInfo.get("emailId");
    setTimeout(function(){
      console.log(notifiedVal.value);
      if(notifiedVal.value === "phone"){
        phone.setValidators(Validators.required);
        email.clearValidators();
      }else{
        email.setValidators([Validators.required,Validators.email])
        phone.clearValidators();
      }
      phone.updateValueAndValidity();
      email.updateValueAndValidity();
    },0)
    
    
  }

}
