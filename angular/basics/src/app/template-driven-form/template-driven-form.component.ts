import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() {
    console.log("constructor in template Driven Component")
  }

  ngOnInit() {
  }
  methodDetails(val){
    console.log(val);
  }
  
}
