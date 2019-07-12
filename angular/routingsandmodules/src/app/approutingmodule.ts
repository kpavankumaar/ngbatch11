import { CustomersComponent } from "./customers/customers.component";
import { OrdersComponent } from "./orders/orders.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
const route = [
    {path:"customers", component:CustomersComponent},
    {path:"orders", component:OrdersComponent},
]
@NgModule({
    imports:[RouterModule.forRoot(route)],
    exports:[RouterModule]
})


export class appRoutingModule{

}