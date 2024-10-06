import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonserviceService } from '../../../Serives/commonservice.service';
import { EmployeeDetails } from '../../../Model/employee-details';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrl: './addemployee.component.css'
})
export class AddemployeeComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router, private http: CommonserviceService,private activerout : ActivatedRoute) { }
  addemployeeform: FormGroup;
  profileImage:any;
  image1:any;
  reader = new FileReader;
  flag:boolean=false;
  empdetails:EmployeeDetails;
  ngOnInit(): void {
    this.addemployeeform = this.fb.group(
      {
        employeeId:[],
        employeeName:[],
        employeeEmail:[],
        employeeContactNo:[],
        emplyeeDesignation:[],
        employeeProfileImage:[],
      }
    )
    this.getEditData()
  }
  onSubmit()
   {
    // alert('Employee Data Added Successfully');
    // let EmployeeDetailsjson:string = JSON.stringify(this.addemployeeform.value);
    // const formData = new FormData();
    // formData.append('employees',EmployeeDetailsjson);
    // formData.append('profile',this.prof);
    // this.http.addEmployee(formData).subscribe();
    if(this.flag)
    {
      alert('Employee Details update successfully...');
      const data:FormData = new FormData();
      let employee_json:string = JSON.stringify(this.addemployeeform.value);
      data.append("text",employee_json)
      data.append('prof',this.profileImage)
      this.http.updateEmployee(data).subscribe()

      window.location.reload();
    }
    else
    {
      const data:FormData = new FormData();
      let employee_json:string = JSON.stringify(this.addemployeeform.value);
      data.append("text",employee_json)
      data.append('prof',this.profileImage)
      this.http.addEmployee(data).subscribe()
      console.log(this.addemployeeform.value);
      alert("Employee Data Added Successfully...")
      // this.addemployeeform.reset()
      window.location.reload();
    }
  }
  onselectProfile(event:any)
  {
     this.profileImage=event.target.files[0];
     this.reader.onload = file =>this.image1=this.reader.result;
     this.reader.readAsDataURL(this.profileImage);
  }
  getEditData()
  {
    this.activerout.paramMap.subscribe(
      param => {
        let employee_id : number = +param.get('employeeId');

        if(employee_id != null)
        {
          this.http.getEmployeeById(employee_id).subscribe(
            (data:EmployeeDetails) => {
              this.empdetails = data;

              console.log(this.empdetails);
              this.profileImage = this.empdetails.employeeProfileImage;
              // this.image1 = this.empdetails.employeeProfileImage ? 'data:image/jpeg;base64,'+ this.empdetails.employeeProfileImage : null;

              this.addemployeeform.patchValue(this.empdetails);
              this.flag = true;
            }
          )
        }
      }
    )
  }
}
