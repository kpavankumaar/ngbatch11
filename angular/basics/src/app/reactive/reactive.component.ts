import { Component, OnInit } from '@angular/core';
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

export class ReactiveComponent implements OnInit {

  constructor() { }
  customerInfo;
  ngOnInit() {
     this.customerInfo = new FormGroup({
       firstName: new FormControl("Krishna"),
       notify: new FormControl(""),
       phone: new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
       emailId: new FormControl("",[Validators.required,Validators.email]),

      //  rating:new FormControl("",[Validators.required,Validators.max(10),Validators.min(1)])
      rating:new FormControl("",[Validators.required, ratingFn(1,5)])
     });
  }
  testMthd(){
    console.log(this.customerInfo);
  }

}
