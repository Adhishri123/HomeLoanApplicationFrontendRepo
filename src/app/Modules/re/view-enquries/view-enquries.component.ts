import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonserviceService } from '../../../Serives/commonservice.service';
import { CustomerEnquiryDetails } from '../../../Model/customer-enquiry-details';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-enquries',
  templateUrl: './view-enquries.component.html',
  styleUrl: './view-enquries.component.css'
})
export class ViewEnquriesComponent implements OnInit{
constructor(private http:CommonserviceService,private router : Router){ }
viewEnquiries:CustomerEnquiryDetails[];
ngOnInit(): void {
  this.http.getEnquries().subscribe((data:CustomerEnquiryDetails[])=>{
    this.viewEnquiries = data;
  })
}
oneditcibil(ceqd:CustomerEnquiryDetails)
{
   this.http.updateCustomerCibilScore(ceqd).subscribe();
   console.log(ceqd)
   window.location.reload();
}
sendApprovedMail(id:CustomerEnquiryDetails)
{
  alert("your mail send Successfully")
  this.http.sendMail(id).subscribe((data:CustomerEnquiryDetails[])=>{
 
  });
}
}
