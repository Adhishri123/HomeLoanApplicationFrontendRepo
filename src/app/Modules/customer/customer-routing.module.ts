import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { ApplicationDetailsComponent } from './application-details/application-details.component';

const routes: Routes = [
  {
    path:'customer_profile',component:ProfileDetailsComponent
  },
  {
    path:'customer_loan_details',component:LoanDetailsComponent
  },
  {
    path:'customer_application_status',component:ApplicationDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
