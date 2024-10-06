import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AppStasticsComponent } from './app-stastics/app-stastics.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { RemoveEmployeeComponent } from './remove-employee/remove-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';

const routes: Routes = [
  {
    path:'add_employee',component:AddemployeeComponent
  },
  {
    path:'stastics',component:AppStasticsComponent
  },
  {
    path:"edit/:employeeId", component:AddemployeeComponent
  },
  {
    path:'delete_employee',component:RemoveEmployeeComponent
  },
  {
    path:'view_Employee',component:ViewEmployeeComponent
  },
  {
    path:'view_Customer',component:ViewCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
