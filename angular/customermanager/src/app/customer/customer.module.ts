import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerOrdersComponent } from './customer-orders.component';
import { EditCustomerComponent } from './edit-customer.component';
import { CustomerComponent } from './customer.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  declarations: [CustomerDetailComponent, CustomerOrdersComponent, EditCustomerComponent, CustomerComponent]
})
export class CustomerModule { }
