import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CMRoutingModule } from './cm-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerifyApplicationComponent } from './verify-application/verify-application.component';
import { LoanapprovedcustomerComponent } from './loanapprovedcustomer/loanapprovedcustomer.component';



@NgModule({
  declarations: [
   VerifyApplicationComponent,
   LoanapprovedcustomerComponent
  ],
  imports: [
    CommonModule,
    CMRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class CMModule { }
