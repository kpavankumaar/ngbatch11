import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

import { ReactiveComponent } from './reactive/reactive.component';
import { SampleComponent } from './sample/sample.component';
import { route } from "./approuting";
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomerscardviewComponent } from './customers/customerscardview.component';
import { CustomergridviewComponent } from './customers/customergridview.component';
@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    ReactiveComponent,
    SampleComponent,
    CustomersComponent,
    OrdersComponent,
    CustomerscardviewComponent,
    CustomergridviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
