import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../../../Serives/commonservice.service';
import { CustomerEnquiryDetails } from '../../../Model/customer-enquiry-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cibil-rejected',
  templateUrl: './cibil-rejected.component.html',
  styleUrl: './cibil-rejected.component.css'
})
export class CibilRejectedComponent implements OnInit{
  constructor(private http:CommonserviceService,private router : Router){ }
  viewEnquiries:CustomerEnquiryDetails[];
  ngOnInit(): void {
    this.http.getrejectCustommerEnquiries().subscribe((data:CustomerEnquiryDetails[])=>{
      this.viewEnquiries = data;
    })
  }
}
