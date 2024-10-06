import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AHRoutingModule } from './ah-routing.module';
import { ViewSanctionletterComponent } from './view-sanctionletter/view-sanctionletter.component';


@NgModule({
  declarations: [
    ViewSanctionletterComponent
  ],
  imports: [
    CommonModule,
    AHRoutingModule
  ]
})
export class AHModule { }
