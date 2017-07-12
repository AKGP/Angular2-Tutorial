import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubComponent } from './sub.component';
import {EmployeeComponent} from './employee.component';

const routes: Routes =[{ path: 'register', component: SubComponent },{ path: 'users', component: EmployeeComponent }]

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports:[
      RouterModule
  ]
})

export class AppRoute{}; 
export const routingComponents = [SubComponent,EmployeeComponent];