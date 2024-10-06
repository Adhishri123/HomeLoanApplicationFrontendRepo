import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewSanctionletterComponent } from './view-sanctionletter/view-sanctionletter.component';

const routes: Routes = [
  {
    path:'view_sanction_letter',component:ViewSanctionletterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AHRoutingModule { }
