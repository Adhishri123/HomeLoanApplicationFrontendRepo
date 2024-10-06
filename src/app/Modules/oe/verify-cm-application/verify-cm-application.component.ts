import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../../../Serives/commonservice.service';
import { Router } from '@angular/router';
import { CustomerDetails } from '../../../Model/customer-details';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-verify-cm-application',
  templateUrl: './verify-cm-application.component.html',
  styleUrl: './verify-cm-application.component.css'
})
export class VerifyCmApplicationComponent implements OnInit{
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
          cc.customerdocstatus=roles[i].value
          this.http.updateCustomerDoc(cc).subscribe();
          console.log(cc.customerdocstatus)
          }
          else if(roles[i].value==="Rejected"){
          alert("Rejected");
          cc.customerdocstatus=roles[i].value
          this.http.updateCustomerDoc(cc).subscribe();
          console.log(cc.customerdocstatus)
          }
      }
  }
    //console.log(cc)
     window.location.reload();
  }
  onViewDocuments(id:number)
  {
    let docjson:String =JSON.stringify(id);
    this.router.navigateByUrl('/userdash/oe/verifyDocuments/'+docjson)
  }
  sendApprovedDocMail(email:CustomerDetails)
  {
    alert("your mail send Successfully")
  this.http.sendDocumentMail(email).subscribe((data:CustomerDetails[])=>{
 
  });
  }
}