import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`<nav class="container">
            <a class="btn btn-primary" routerLink="register" routeLinkActive="active">Register</a>
            <a class="btn btn-primary" routerLink="users" routeLinkActive="active">Get Users</a>
            </nav>
            <router-outlet></router-outlet>`
})
export class AppComponent  {

}
