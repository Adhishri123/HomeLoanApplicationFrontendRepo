import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RERoutingModule } from './re-routing.module';
import { ViewEnquriesComponent } from './view-enquries/view-enquries.component';
import { RegisterNewEnquiryComponent } from './register-new-enquiry/register-new-enquiry.component';
import { CibilApprovedComponent } from './cibil-approved/cibil-approved.component';
import { CibilRejectedComponent } from './cibil-rejected/cibil-rejected.component';
import { ViewApplicationStatusComponent } from './view-application-status/view-application-status.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewEnquriesComponent,
    RegisterNewEnquiryComponent,
    CibilApprovedComponent,
    CibilRejectedComponent,
    ViewApplicationStatusComponent,
    RegistrationFormComponent
  ],
  imports: [
    CommonModule,
    RERoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class REModule { }
