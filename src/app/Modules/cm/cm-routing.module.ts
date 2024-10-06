import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanapprovedcustomerComponent } from './loanapprovedcustomer/loanapprovedcustomer.component';
import { VerifyApplicationComponent } from './verify-application/verify-application.component';

const routes: Routes = [
  {
    path:'verify_application/:id',component:VerifyApplicationComponent
  },
  {
    path:'approvedloan',component:LoanapprovedcustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CMRoutingModule { }
