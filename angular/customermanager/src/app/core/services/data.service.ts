import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
@Injectable()
export class DataService{
    url = "api/customers";
    constructor(private http:HttpClient){

    }
    getCustomersData(){
        console.log("Data service");
        return this.http.get(this.url).pipe(
            map((data) => {
                return data;
            })
        )
    }
}