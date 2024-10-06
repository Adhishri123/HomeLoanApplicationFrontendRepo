import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './Template/header/header.component';
import { FooterComponent } from './Template/footer/footer.component';
import { DashboradComponent } from './Template/dashborad/dashborad.component';
import { LocationComponent } from './Template/location/location.component';
import { EmiCaculatorComponent } from './Include/emi-caculator/emi-caculator.component';
import { MenuBarComponent } from './Include/menu-bar/menu-bar.component';
import { AppHeaderComponent } from './Include/app-header/app-header.component';
import { UserDashboardComponent } from './Include/user-dashboard/user-dashboard.component';
import { EnquiryFormComponent } from './Include/enquiry-form/enquiry-form.component';
import { AboutComponent } from './Template/about/about.component';
import { ContactComponent } from './Template/contact/contact.component';
import { LoginComponent } from './Include/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboradComponent,
    LocationComponent,
    LoginComponent,
    EmiCaculatorComponent,
    MenuBarComponent,
    AppHeaderComponent,
    UserDashboardComponent,
    EnquiryFormComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
