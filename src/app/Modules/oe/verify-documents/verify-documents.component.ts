import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../../../Model/customer-details';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonserviceService } from '../../../Serives/commonservice.service';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';

@Component({
  selector: 'app-verify-documents',
  templateUrl: './verify-documents.component.html',
  styleUrl: './verify-documents.component.css'
})
export class VerifyDocumentsComponent {
  constructor(private http:CommonserviceService,private router : Router){ }
  viewCustomer:CustomerDetails[];
  //addCustomerForm: FormGroup;
  updatecus:CustomerDetails[];
  loanSt:string

  // c:any;
cc:any;
  ngOnInit(): void {
    this.http.getCustomer().subscribe((data:CustomerDetails[])=>{
      this.viewCustomer = data;
    });
  }

  oneditDoc(cc:CustomerDetails)
  {
    const roles = document.getElementsByName("satus") as NodeListOf<HTMLInputElement>;
    for (var i = 0; i < roles.length; i++) {
    if(roles[i].checked){
          if(roles[i].value==="Approved"){
          alert("Approved");
          // console.log(roles[i].value)
          cc.customerLoanStatus=roles[i].value
          this.http.updateCustomerLoanSt(cc).subscribe();
          console.log(cc.customerLoanStatus)
          }
          else if(roles[i].value==="Rejected"){
          alert("Rejected");
          cc.customerLoanStatus=roles[i].value
          this.http.updateCustomerLoanSt(cc).subscribe();
          console.log(cc.customerLoanStatus)
          }
      }
  }
    //console.log(cc)
     window.location.reload();
  }
  // constructor(private http:CommonserviceService,private router : Router,private activerout : ActivatedRoute){ }
  // viewCustomer:AnimationKeyframesSequenceMetadata;
  // addCustomerForm: FormGroup;
  // flag:boolean=false;
  // loanSt:string;
  // c:any;
  // cc:any;
  // ngOnInit(): void {
  //   this.http.findonecustomer(id).subscribe((data:any)=>{
  //     this.viewCustomer = data;
  //   });
  // }

  // oneditDoc(cc:CustomerDetails)
  // {const roles = document.getElementsByName("satus") as NodeListOf<HTMLInputElement>;
  // for (var i = 0; i < roles.length; i++) {
  //   if(roles[i].checked){
  //         if(roles[i].value==="Approved"){
  //         alert("Approved");
  //         // console.log(roles[i].value)
  //         cc.customerdocstatus=roles[i].value
  //         this.http.updateCustomerDoc(cc).subscribe();
  //         console.log(cc.customerdocstatus)
  //         }
  //         else if(roles[i].value==="Rejected"){
  //         alert("Rejected");
  //         cc.customerdocstatus=roles[i].value
  //         this.http.updateCustomerDoc(cc).subscribe();
  //         console.log(cc.customerdocstatus)
  //         }
  //     }
        
  //   this.getEditData();
  // }
  //   //console.log(cc)
  //    window.location.reload();
  // }
  // getEditData()
  // {
  //   this.activerout.paramMap.subscribe(
  //     param=>{
  //     let projson:string = param.get('prod')
  //     if(projson!=null)
  //     {
  //       let ll:CustomerDetails =JSON.parse(projson);
  //       this.addCustomerForm.patchValue(ll);
  //       this.flag=true;
  //     }
     
  //   }) 
  // }
 }
