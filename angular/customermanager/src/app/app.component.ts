import { Component } from '@angular/core';
import { DataService } from './core/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[DataService]
  
})
export class AppComponent {
  title = 'app';
  // constructor(private dataService: DataService){

  // }
  ngOnInit(){
    //this.dataService.getCustomersData()
  }
}
