import { Component, Input, OnChanges } from '@angular/core';
import { ElementDef } from '@angular/core/src/view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  title = 'Angular classes';
  color = 'red';
  data: any ;
  sharedData = [1,2,3,4];
  testFn(e: any){
    this.data  = e;
    console.log(e);

    // k.pavankumaar@gmail.com
  }
  newData: any;

  // @Input('testEl') elementFromPage:Element
  constructor(){
    console.log("app component constructor");
  }
  ngOnChanges(){
    console.log("app component ngOnchanges");
  }
  ngOnInit(){
    console.log("app component ngOnInit");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit in app component")
  }
  ngDoCheck(){
    console.log("ngDoCheck in appComponent");
  }
  updataTheDataBoundProp (){
    // this.sharedData = [10,20,30]; // resetting the value 
    this.sharedData.push(5);
  }

}
