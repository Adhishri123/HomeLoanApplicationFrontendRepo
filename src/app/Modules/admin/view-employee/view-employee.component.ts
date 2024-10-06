import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../../../Serives/commonservice.service';
import { EmployeeDetails } from '../../../Model/employee-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent implements OnInit{

constructor(private http : CommonserviceService, private router : Router) { }

viewemployeeData:EmployeeDetails[];

ngOnInit(): void {
  this.http.getEmployee().subscribe((data:EmployeeDetails[])=>
  {
    this.viewemployeeData=data;
  })
}

onEdit(a:EmployeeDetails)
{
   let json_employee = JSON.stringify(a.employeeId);
   this.router.navigateByUrl('/userdash/admin/edit/'+json_employee);
}

onDelete(id:number)
{
  this.http.deleteEmployee(id).subscribe();
  alert("Employee delete successfully...");
  window.location.reload();
}
}
