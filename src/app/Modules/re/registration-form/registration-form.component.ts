import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonserviceService } from '../../../Serives/commonservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent implements OnInit {
  // constructor(private fb: FormBuilder, private http: CommonserviceService) { }
  // addCustomerForm: FormGroup;
  // prof: any;
  // pancard: any;
  // adharcard: any;
  // signiture: any;
  // passb: any;
  // income: any;
  // image1: any;
  // image2: any;
  // image3: any;
  // image4: any;
  // image5: any;
  // image6: any;
  // reader = new FileReader;
  // ngOnInit(): void {
  //   this.addCustomerForm = this.fb.group(
  //     {
  //       customerApplicationId: [0],
  //       customerFirstName: [],
  //       customerMiddleName: [],
  //       customerLastName: [],
  //       customerMobileNumber: [],
  //       customerAdditionalMobileNumber: [],
  //       customerPanCard: [],
  //       customerAadharCard: [],
  //       customerDateOfBirth: [],
  //       customerEmail: [],
  //       customerPassword: [],
  //       customerGender: [],
  //       customerQualification: [],
  //       customerCibilScore: [],
  //       customerLoanStatus: [],
  //       customerLoanAmountRequired: [],
  //       customerAddress: this.fb.group(
  //         {
  //           addressId: [],
  //           localHouseNumber: [],
  //           localStreetName: [],
  //           localAreaName: [],
  //           localCityName: [],
  //           localDistrict: [],
  //           localState: [],
  //           localPincode: [],
  //           permanentHouseNumber: [],
  //           permanentStreetName: [],
  //           permanentAreaName: [],
  //           permanentCityName: [],
  //           permanentDistrict: [],
  //           permanentState: [],
  //           permanentPincode: [],
  //         }),
  //       customerProfession: this.fb.group({
  //         professionId: [],
  //         professionType: [],
  //         professionMonthlyIncome: [],
  //         professionDesignation: [],
  //       }),
  //       customerBankDetails: this.fb.group({
  //         customerBankDetailsId: [],
  //         customerBankAccountNumber: [],
  //         customerBankName: [],
  //         customerBankBranchName: [],
  //         customerBankIfscNumber: [],
  //       }),
  //       customerAllDocuments: this.fb.group({

  //       }),
  //     })
  // }
  // OnSubmit()
  // {
  //   alert("Customer Authentication SuccessFull...!")
  //   let customerjson:string = JSON.stringify(this.addCustomerForm.value);
  //   const formData = new FormData();
  //   formData.append('customer',customerjson);
  //   formData.append('pan',customerjson);
  //   formData.append('income',customerjson);
  //   formData.append('adhar',customerjson);
  //   formData.append('Profilephoto',customerjson);
  //   formData.append('sign',customerjson);
  //   formData.append('passbook',customerjson);
  //   this.http.addCustomer(formData).subscribe();
  // }
  // onSelectProfile(event:any)
  // {
  //   this.prof = event.target.files[0],
  //   this.reader.onload = e => 
  //   this.image1 = this.reader.result;
  //   this.reader.readAsDataURL(this.prof);
  // }
  // onSelectPanCard(event:any)
  // {
  //   this.pancard = event.target.files[0],
  //   this.reader.onload = e => 
  //   this.image2 = this.reader.result;
  //   this.reader.readAsDataURL(this.pancard);
  // }
  // onSelectAdharCard(event:any)
  // {
  //   this.adharcard = event.target.files[0],
  //   this.reader.onload = e => 
  //   this.image2 = this.reader.result;
  //   this.reader.readAsDataURL(this.adharcard);
  // }
  // onSelectSigniture(event:any)
  // {
  //   this.signiture = event.target.files[0],
  //   this.reader.onload = e => 
  //   this.image2 = this.reader.result;
  //   this.reader.readAsDataURL(this.signiture);
  // }
  // onSelectPassBook(event:any)
  // {
  //   this.passb = event.target.files[0],
  //   this.reader.onload = e => 
  //   this.image2 = this.reader.result;
  //   this.reader.readAsDataURL(this.passb);
  // }
  // onSelectIncome(event:any)
  // {
  //   this.income = event.target.files[0],
  //   this.reader.onload = e => 
  //   this.image2 = this.reader.result;
  //   this.reader.readAsDataURL(this.income);
  // }
  //New MultiStep From
  
  step = 1;
  constructor(private formBuilder: FormBuilder, private http: CommonserviceService, private activateRoute: ActivatedRoute) { }
  addCustomerForm: FormGroup;
  addCustomerAddress: FormGroup;
  addCustomerProfession: FormGroup;
  addCustomerBankDetails: FormGroup;
  addCustomerAllDocuments: FormGroup;
  CustomerDetails = false;
  CustomerAddress = false;
  CustomerProfession = false;
  CustomerBankDetails = false;
  CustomerAllDocuments = false;
  prof: any;
  pancard: any;
  adharcard: any;
  signiture: any;
  passb: any;
  income: any;
  image1: any;
  image2: any;
  image3: any;
  image4: any;
  image5: any;
  image6: any;
  reader = new FileReader;
  ngOnInit() {
    this.addCustomerForm = this.formBuilder.group({
      customerApplicationId: [],
      customerFirstName:[],
      customerMiddleName:[],
      customerLastName:[],
      customerMobileNumber:[],
      customerAdditionalMobileNumber:[],
      customerPanCardNumber:[],
      customerAadharCard:[],
      customerDateOfBirth:[],
      customerEmail:[],
      customerPassword:[],
      customerGender:[],
      customerQualification:[],
      customerLoanStatus:[],
      customerLoanAmountRequired:[],
      customerdocstatus:[],
  
      customerAddress : this.formBuilder.group({
      addressId:[],
      localHouseNumber:[],
      localStreetName:[],
      localAreaName:[],
      localCityName:[],
      localDistrict:[],
      localState:[],
      localPincode:[],
      permanentHouseNumber:[],
      permanentStreetName:[],
      permanentAreaName:[],
      permanentCityName:[],
      permanentDistrict:[],
      permanentState:[],
      permanentPincode:[],
    }),

    customerProfession : this.formBuilder.group({
      professionId:[],
      professionType:[],
      professionMonthlyIncome:[],
      professionDesignation:[],
    }),

    customerBankDetails : this.formBuilder.group({
    customerBankDetailsId:[],
    customerBankAccountNumber:[],
    customerBankName:[],
    customerBankBranchName:[],
    customerBankIfscNumber:[],
    }),
    customerAllDocuments : this.formBuilder.group({
    }),
  });
  this.getEditInfo();
  }
  get personal() { return this.addCustomerForm.controls; }
  get address() { return this.addCustomerAddress.controls; }
  get Profession() { return this.addCustomerProfession.controls; }
  get bankDetails() { return this.addCustomerBankDetails.controls; }
  get document() { return this.addCustomerAllDocuments.controls; }
  next() {
    this.step++
   // console.log(this.step)
    if (this.step == 1) {
      this.CustomerDetails = true;
      // if (this.addCustomerForm.invalid) { return }
      // this.step++
    }
    if (this.step == 2) {
      this.CustomerAddress = true;
    }
    if (this.step == 3) {
      this.CustomerProfession = true;
    }
    if (this.step == 4) {
      this.CustomerBankDetails = true;
    }
    if (this.step == 5) {
      this.CustomerAllDocuments = true;
    }
  }
  previous() {
    this.step--
    if (this.step == 1) {
      this.CustomerDetails = false;
    }
    if (this.step == 2) {
      this.CustomerAddress = false;
    }
    if (this.step == 3) {
      this.CustomerProfession = false;
    }
    if (this.step == 4) {
      this.CustomerBankDetails = false;
    }
  }
  onSubmit() {
    // if (this.step == 5) {
      this.CustomerAllDocuments = true;
      alert("Customer Authentication SuccessFull...!")
      let customerjson:string = JSON.stringify(this.addCustomerForm.value);
      const formData = new FormData();
      formData.append('customer', customerjson);
      formData.append('pan', this.pancard);
      formData.append('income', this.income);
      formData.append('adhar', this.adharcard);
      formData.append('Profilephoto',this.prof);
      formData.append('sign', this.signiture);
      formData.append('passbook', this.passb);
      this.http.addCustomer(formData).subscribe();
      //if (this.addCustomerAllDocuments.invalid) { return }
    // }
  }
   onSelectProfile(event:any)
  {
    this.prof = event.target.files[0],
    this.reader.onload = e => 
    this.image1 = this.reader.result;
    this.reader.readAsDataURL(this.prof);
  }
  onSelectPanCard(event:any)
  {
    this.pancard = event.target.files[0],
    this.reader.onload = e => 
    this.image2 = this.reader.result;
    this.reader.readAsDataURL(this.pancard);
  }
  onSelectAdharCard(event:any)
  {
    this.adharcard = event.target.files[0],
    this.reader.onload = e => 
    this.image3 = this.reader.result;
    this.reader.readAsDataURL(this.adharcard);
  }
  onSelectSigniture(event:any)
  {
    this.signiture = event.target.files[0],
    this.reader.onload = e => 
    this.image4 = this.reader.result;
    this.reader.readAsDataURL(this.signiture);
  }
  onSelectPassBook(event:any)
  {
    this.passb = event.target.files[0],
    this.reader.onload = e => 
    this.image5 = this.reader.result;
    this.reader.readAsDataURL(this.passb);
  }
  onSelectIncome(event:any)
  {
    this.income = event.target.files[0],
    this.reader.onload = e => 
    this.image6 = this.reader.result;
    this.reader.readAsDataURL(this.income);
  }
  
  getEditInfo(){
    let id :any;
    this.activateRoute.paramMap.subscribe(
      map=>{
        id = map.get('id')
        console.log(id);
      }
    )

    if(id != null){
      this.http.findonecustomer(id).subscribe(
        (data: any) => this.addCustomerForm.patchValue(data)
      )
    }
  }
}
