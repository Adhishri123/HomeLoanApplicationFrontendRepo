import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { ApplicationDetailsComponent } from './application-details/application-details.component';


@NgModule({
  declarations: [
    ProfileDetailsComponent,
    LoanDetailsComponent,
    ApplicationDetailsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
