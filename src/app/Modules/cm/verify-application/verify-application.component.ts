import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../../../Serives/commonservice.service';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { CustomerDetails } from '../../../Model/customer-details';

@Component({
  selector: 'app-verify-application',
  templateUrl: './verify-application.component.html',
  styleUrl: './verify-application.component.css'
})
export class VerifyApplicationComponent  {
constructor(private http:CommonserviceService,private fb : FormBuilder){}
addsactiondata:CustomerDetails[];
sanctionform:FormGroup;
ngOnInit(): void {
  this.sanctionform=this.fb.group({
    sanctionId:[],
	sanctionDate:[],
	applicantName:[],
	loanAmountSanctioned:[],
	rateOfInterest:[],
	loanTenure:[],
	monthlyEmiAmount:[],
	sanctionLetter:[]
  })
}
onSubmit()
{
  this.http.sanction(this.sanctionform.value).subscribe(
    (data:CustomerDetails[])=>{
      this.addsactiondata = data;
      alert('Customer Details Sactions Successfully...');
    }
  );
}
}
