import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../../../Serives/commonservice.service';
import { CustomerDetails } from '../../../Model/customer-details';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-approved-customer',
  templateUrl: './document-approved-customer.component.html',
  styleUrl: './document-approved-customer.component.css'
})
export class DocumentApprovedCustomerComponent implements OnInit {
  constructor(private http:CommonserviceService,private router:Router){ }
  viewAprovedCustomer:CustomerDetails[];
  addCustomerForm: FormGroup;
  ngOnInit(): void {
    this.http.ApprovedDocuments().subscribe((data:CustomerDetails[])=>{
      this.viewAprovedCustomer = data;
    });
  }
  // onEdit(id:number)
  // {
  //     this.router.navigate([`/userdash/cm/verify_application/${id}`]);
  // }
}
