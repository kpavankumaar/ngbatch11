import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  constructor(private dataService:DataService, private route:ActivatedRoute) { }
  editCustDetails;
  ngOnInit() {
    this.route.parent.params.subscribe((data)=>{
      console.log('param observable data',data);
      this.dataService.getCustomerDataById(data.id).subscribe((data)=>{
        console.log(data)
        this.editCustDetails = data;
      })
    });
    
  }

  submitDetails(formGroup){
    
  }
}
