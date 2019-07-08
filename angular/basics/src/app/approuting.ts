import { Routes } from "@angular/router";
import { ReactiveComponent } from "./reactive/reactive.component";
import { SampleComponent } from "./sample/sample.component";
import { CustomersComponent } from "./customers/customers.component";
import { CustomerscardviewComponent } from "./customers/customerscardview.component";

export const route:Routes =  [
    {path:"reactive", component: ReactiveComponent},
    {path:"sample", component: SampleComponent},
    {path:"customers", 
      component: CustomersComponent,
      children:[
        {path:"cardsview", component:CustomerscardviewComponent}
      ]
    },
    
    
  ]

