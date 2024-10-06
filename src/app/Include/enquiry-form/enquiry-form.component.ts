import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonserviceService } from '../../Serives/commonservice.service';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrl: './enquiry-form.component.css'
})
export class EnquiryFormComponent implements OnInit {
  constructor(private fb: FormBuilder,private http:CommonserviceService) { }
  enquiryform: FormGroup;
  ngOnInit(): void {
    this.enquiryform = this.fb.group({
        customerEnquiryId: [],
        customerFirstName: [],
        customerLastName: [],
        customerPanCard: [],
        customerAadharNumber: [],
        customerEmailId: [],
        customerPassword: [],
        customerMobileNumber: [],
        cibil:this.fb.group({
          cid:[],
          // cstatus:[],
          // cscore:[],
        }),
     })
  }
  onSubmit()
  {
    console.log(this.enquiryform.value,' this.enquiryform.value');
    alert("Your Enquiry Details Added Successfully...!")
   
    this.http.addcustomerenquiry(this.enquiryform.value).subscribe();
  }
  // subCibl()
  // {
  //   this.http.updateCustomerCibilScore().subscribe();
  // }
}
