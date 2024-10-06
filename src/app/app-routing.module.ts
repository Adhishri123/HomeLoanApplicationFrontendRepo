import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboradComponent } from './Template/dashborad/dashborad.component';
import { HeaderComponent } from './Template/header/header.component';
import { LocationComponent } from './Template/location/location.component';
import { ContactComponent } from './Template/contact/contact.component';
import { FooterComponent } from './Template/footer/footer.component';
import { UserDashboardComponent } from './Include/user-dashboard/user-dashboard.component';
import { EmiCaculatorComponent } from './Include/emi-caculator/emi-caculator.component';
import { EnquiryFormComponent } from './Include/enquiry-form/enquiry-form.component';
import { LoginComponent } from './Include/login/login.component';
import { MenuBarComponent } from './Include/menu-bar/menu-bar.component';
import { AppHeaderComponent } from './Include/app-header/app-header.component';
import { AboutComponent } from './Template/about/about.component';

const routes: Routes = [
  {
    path:"",redirectTo:"dash",pathMatch:"full"
  },
  {
    path:"dash",component:DashboradComponent,
    children:[
      {path:"",redirectTo:"about" ,pathMatch:"full"},
      {path:"about",component:AboutComponent},
      {path:"location",component:LocationComponent},
      {path:"contact",component:ContactComponent},
      {path:"header",component:HeaderComponent},
      {path:"footer",component:FooterComponent},
      {path:"emicalculator",component:EmiCaculatorComponent},
      {path:"equiryform",component:EnquiryFormComponent},
      {path:"login",component:LoginComponent},
      {path:"sidemenu",component:MenuBarComponent},
      {path:"appheader",component:AppHeaderComponent},
       ]
  },
  {
            path:"userdash",component:UserDashboardComponent,children:[
              {
                path:"admin",loadChildren:()=>import('./Modules/admin/admin.module').then(file=>file.AdminModule)
              },
              {
                path:"re",loadChildren:()=>import('./Modules/re/re.module').then(file=>file.REModule)
              },
              {
                path:"oe",loadChildren:()=>import('./Modules/oe/oe.module').then(file=>file.OEModule)
              },
              {
                path:"cm",loadChildren:()=>import('./Modules/cm/cm.module').then(file=>file.CMModule)
              },
              {
                path:"ah",loadChildren:()=>import('./Modules/ah/ah.module').then(file=>file.AHModule)
              },
              {
                path:"customer",loadChildren:()=>import('./Modules/customer/customer.module').then(file=>file.CustomerModule)
              }
              

            ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
