import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
const route:Routes = [
    {path:"customers",loadChildren:"./customers/customers.module#CustomersModule"},
    {path:"orders",loadChildren:"./customers/orders.module#OrdersModule"}
]

@NgModule({
    imports:[RouterModule.forRoot(route)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}