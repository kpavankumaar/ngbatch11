import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { ActivatedRouteSnapshot, RouterState, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  constructor(private dataService:DataService,private router:ActivatedRoute) {

  }
  customerdata;
  ngOnInit() {
    console.log(this.router);
    var id = this.router.snapshot.params.id;
    console.log("id value ", id);
    this.dataService.getCustomerDataById(id).subscribe(function (data){
      this.customerData = data;
      console.log("customerdata", this.customerData);
    })
  }

}
