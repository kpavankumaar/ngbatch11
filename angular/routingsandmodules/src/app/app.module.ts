import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import { appRoutingModule } from './approutingmodule';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomersModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
