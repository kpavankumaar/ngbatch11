import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit in sample component")
  }

}
