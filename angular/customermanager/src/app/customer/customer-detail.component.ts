import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterState, Router } from '@angular/router';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
 
})
export class CustomerDetailComponent implements OnInit{
  constructor(public route: ActivatedRoute, public dataService: DataService){

  }
  customerData;
  ngOnInit(){
    var id;
    this.route.parent.params.subscribe((data) => {
      console.log("this rute", this);
      console.log("customer detail component",typeof data, data);
       id = +data.id;
       this.dataService.getCustomerDataById(id).subscribe((data) =>{
        console.log("this  service", this);
        this.customerData = data;
        console.log(this.customerData);
      })
    })
    
  }

}
