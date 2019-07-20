import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
  
})
export class CustomersComponent {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCustomersData().subscribe((data) => {
      console.log(data);
    });
  }

}
