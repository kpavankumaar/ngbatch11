import { Component, Input } from '@angular/core';
import { ElementDef } from '@angular/core/src/view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular classes';
  color = 'red';
  data ;
  testFn(e){
    this.data  = e;
    console.log(e);

    // k.pavankumaar@gmail.com
  }
  newData;
  // @Input('testEl') elementFromPage:Element


  

}
