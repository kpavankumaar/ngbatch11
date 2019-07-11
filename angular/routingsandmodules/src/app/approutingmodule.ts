import { CustomersComponent } from "./customers/customers.component";
import { OrdersComponent } from "./orders/orders.component";
import { NgModule } from "@angular/core";

const route = [
    {path:"customers", component:CustomersComponent},
    {path:"orders", component:OrdersComponent},
]
@NgModule({
    
})


export class appRoutingModule{

}