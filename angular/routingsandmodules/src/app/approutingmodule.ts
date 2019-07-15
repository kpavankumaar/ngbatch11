import { CustomersComponent } from "./customers/customers.component";
import { OrdersComponent } from "./orders/orders.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// const route = [
//     {path:"customers", component:CustomersComponent},
//     {path:"orders", component:OrdersComponent},
// ]
const route:Routes= [
    {path:"customers",loadChildren:"./customers/customers.module#CustomersModule" },
    
]

@NgModule({
    imports:[RouterModule.forRoot(route)],
    exports:[RouterModule]
})


export class appRoutingModule{

}