import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../../../Serives/commonservice.service';
import { Router } from '@angular/router';
import { CustomerDetails } from '../../../Model/customer-details';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-new-enquiry',
  templateUrl: './register-new-enquiry.component.html',
  styleUrl: './register-new-enquiry.component.css'
})
export class RegisterNewEnquiryComponent implements OnInit{
  constructor(private http:CommonserviceService,private router : Router){ }
  viewCustomer:CustomerDetails[];
  addCustomerForm: FormGroup;

  c:any;
cc:any;
  ngOnInit(): void {
    this.http.getCustomer().subscribe((data:CustomerDetails[])=>{
      this.viewCustomer = data;
    });
  }
}
