import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../../../Model/customer-details';
import { CommonserviceService } from '../../../Serives/commonservice.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.css'
})
export class ViewCustomerComponent implements OnInit{
  constructor(private http : CommonserviceService) { }
  viewCustomerData:CustomerDetails[];
  ngOnInit(): void {
    this.http.getEmployee().subscribe((data:CustomerDetails[])=>
    {
      this.viewCustomerData=data;
    })
  }
}
