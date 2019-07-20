import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
const route:Routes = [
    {path:"",redirectTo:"customers",pathMatch:"full"},
    {path:"customers",loadChildren:"./customers/customers.module#CustomersModule"},
    {path:"orders",loadChildren:"./orders/orders.module#OrdersModule"},
    {path:"**",redirectTo:"customers",pathMatch:"full"},
]

@NgModule({
    imports:[RouterModule.forRoot(route)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}