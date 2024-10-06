import { Component, OnInit } from '@angular/core';
import { CustomerEnquiryDetails } from '../../../Model/customer-enquiry-details';
import { Router } from '@angular/router';
import { CommonserviceService } from '../../../Serives/commonservice.service';

@Component({
  selector: 'app-cibil-approved',
  templateUrl: './cibil-approved.component.html',
  styleUrl: './cibil-approved.component.css'
})
export class CibilApprovedComponent implements OnInit{
  constructor(private http:CommonserviceService,private router : Router){ }
  viewEnquiries:CustomerEnquiryDetails[];
  ngOnInit(): void {
    this.http.getapprovedCustomerenquries().subscribe((data:CustomerEnquiryDetails[])=>{
      this.viewEnquiries = data;
    })
  }

  onEdit(id:any){
    this.router.navigateByUrl('/userdash/re/RegisterForm/'+id);
  }
}
