import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
       phone: new FormControl(""),
       emailId: new FormControl("",[Validators.required,Validators.email])
     });
  }
  testMthd(){
    console.log(this.customerInfo);
  }

}
