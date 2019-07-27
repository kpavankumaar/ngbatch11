import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import { ICustomers } from "../../shared/interfaces";

@Injectable()
export class DataService{
    url = "api/customers";
    constructor(private http:HttpClient){

    }
    getCustomersData():Observable<ICustomers[]>{
        console.log("Data service");
        return this.http.get<ICustomers[]>(this.url).pipe(
            map((data) => {
                return data;
            })
        )
    }
}