import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomerscardComponent } from './customerscard.component';
import { CustomersgridComponent } from './customersgrid.component';
import { CustomersRoutingModule } from './customersrouting.module';
@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  exports:[CustomersComponent],
  declarations: [CustomersComponent, CustomerscardComponent, CustomersgridComponent]
})
export class CustomersModule { }
