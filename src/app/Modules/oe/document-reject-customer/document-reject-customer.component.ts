import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../../../Serives/commonservice.service';
import { CustomerDetails } from '../../../Model/customer-details';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-document-reject-customer',
  templateUrl: './document-reject-customer.component.html',
  styleUrl: './document-reject-customer.component.css'
})
export class DocumentRejectCustomerComponent implements OnInit{
  constructor(private http:CommonserviceService){ }
  viewRejectedCustomer:CustomerDetails[];
  addCustomerForm: FormGroup;
  ngOnInit(): void {
    this.http.RejectedDocuments().subscribe((data:CustomerDetails[])=>{
      this.viewRejectedCustomer = data;
    });
  }
}
