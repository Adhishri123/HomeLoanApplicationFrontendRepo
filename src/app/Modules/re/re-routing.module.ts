import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEnquriesComponent } from './view-enquries/view-enquries.component';
import { RegisterNewEnquiryComponent } from './register-new-enquiry/register-new-enquiry.component';
import { CibilApprovedComponent } from './cibil-approved/cibil-approved.component';
import { CibilRejectedComponent } from './cibil-rejected/cibil-rejected.component';
import { ViewApplicationStatusComponent } from './view-application-status/view-application-status.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { EnquiryFormComponent } from '../../Include/enquiry-form/enquiry-form.component';

const routes: Routes = [
  {
    path:'view_enquiry',component:ViewEnquriesComponent
  },
  {
    path:'register_neEnquiry',component:RegisterNewEnquiryComponent
  },
  {
    path:'cibil_approved',component:CibilApprovedComponent
  },
  {
    path:'cibil_rejected',component:CibilRejectedComponent
  },
  {
    path:'viewApp_status',component:ViewApplicationStatusComponent
  },
  {
    path:'RegisterForm',component:RegistrationFormComponent
  },
  {
    path:'RegisterForm/:id',component:RegistrationFormComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RERoutingModule { }
