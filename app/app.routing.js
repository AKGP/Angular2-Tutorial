"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var sub_component_1 = require("./sub.component");
var employee_component_1 = require("./employee.component");
var routes = [{ path: 'register', component: sub_component_1.SubComponent }, { path: 'users', component: employee_component_1.EmployeeComponent }];
var AppRoute = (function () {
    function AppRoute() {
    }
    AppRoute = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoute);
    return AppRoute;
}());
exports.AppRoute = AppRoute;
;
exports.routingComponents = [sub_component_1.SubComponent, employee_component_1.EmployeeComponent];
//# sourceMappingURL=app.routing.js.map