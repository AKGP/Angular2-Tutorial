import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class EmployeeService{
    private _url = 'api/data.json';
    constructor(private _http:Http){

    }

    getEmployee(){
        return this._http.get(this._url)
        // .map((response:Response)=> response.json());
        .map(function(res){
            console.log(res);
            return res.json();
        })
    }
}