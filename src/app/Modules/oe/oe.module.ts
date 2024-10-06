import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OERoutingModule } from './oe-routing.module';
import { VerifyCmApplicationComponent } from './verify-cm-application/verify-cm-application.component';
import { FormsModule } from '@angular/forms';
import { VerifyDocumentsComponent } from './verify-documents/verify-documents.component';
import { DocumentApprovedCustomerComponent } from './document-approved-customer/document-approved-customer.component';
import { DocumentRejectCustomerComponent } from './document-reject-customer/document-reject-customer.component';
import { CMModule } from '../cm/cm.module';

@NgModule({
  declarations: [
    VerifyCmApplicationComponent,
    VerifyDocumentsComponent,
    DocumentApprovedCustomerComponent,
    DocumentRejectCustomerComponent
  ],
  imports: [
    CommonModule,
    CMModule,
    OERoutingModule
  ]
})
export class OEModule { }
