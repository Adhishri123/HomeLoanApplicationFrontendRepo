import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AppStasticsComponent } from './app-stastics/app-stastics.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { RemoveEmployeeComponent } from './remove-employee/remove-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddemployeeComponent,
    AppStasticsComponent,
    UpdateEmployeeComponent,
    RemoveEmployeeComponent,
    ViewEmployeeComponent,
    ViewCustomerComponent,
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
