import { Component } from '@angular/core';

@Component({
  selector: 'sub-app',
  templateUrl: 'app/register.component.html',
})
export class SubComponent  { 
    addUser(value:any){
        console.log(value);
    }
}
