import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomersComponent } from "./customers.component";

const route:Routes = [
    {path:'',component:CustomersComponent}
]
@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[RouterModule]
})
export class CustomersRoutingModule{

}