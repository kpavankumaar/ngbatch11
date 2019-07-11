import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomerscardComponent } from './customerscard.component';
import { CustomersgridComponent } from './customersgrid.component';
import { OrdersModule } from '../orders/orders.module';


@NgModule({
  imports: [
    CommonModule,
    OrdersModule
  ],
  exports:[CustomersComponent],
  declarations: [CustomersComponent, CustomerscardComponent, CustomersgridComponent]
})
export class CustomersModule { }
