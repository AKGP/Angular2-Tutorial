import { Component,OnInit } from '@angular/core';
import {EmployeeService} from './employee.service';
@Component({
    selector:'employee',
    templateUrl:'app/employee.component.html',
    providers:[EmployeeService]
})

export class EmployeeComponent {
 employees:any[];
 constructor(private _employeeservice:EmployeeService){
     var app = this;
     this._employeeservice.getEmployee()
    .subscribe(resEmpData => this.employees = resEmpData);
    // .subscribe(function(data){
    //     return app.employees = data;
    //     });
     } 

}