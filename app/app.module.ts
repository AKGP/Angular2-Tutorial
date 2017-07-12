import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {routingComponents} from './app.routing';
import { AppRoute } from './app.routing';
  @NgModule({
    imports: [BrowserModule,
      FormsModule,
      HttpModule,
      AppRoute
    ],
    declarations: [AppComponent,routingComponents],
    bootstrap: [AppComponent]
  })
export class AppModule { }
