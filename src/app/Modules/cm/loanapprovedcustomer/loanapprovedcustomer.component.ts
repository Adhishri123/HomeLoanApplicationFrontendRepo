import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../../../Serives/commonservice.service';
import { Router } from '@angular/router';
import { CustomerDetails } from '../../../Model/customer-details';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loanapprovedcustomer',
  templateUrl: './loanapprovedcustomer.component.html',
  styleUrl: './loanapprovedcustomer.component.css'
})
export class LoanapprovedcustomerComponent implements OnInit{

  constructor(private http:CommonserviceService,private router:Router){ }
  viewAprovedCustomers:CustomerDetails[];
  addCustomerForm: FormGroup;
  ngOnInit(): void {
    this.http.ApprovedLoan().subscribe((data:CustomerDetails[])=>{
      this.viewAprovedCustomers = data;
    });
  }
  
  onEdit(id:number)
  {
      this.router.navigate([`/userdash/cm/verify_application/${id}`]);
  }
}
