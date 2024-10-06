import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
constructor(private fb : FormBuilder , private router : Router){ }
loginform:FormGroup;
ngOnInit(): void {
  this.loginform=this.fb.group(
    {
      username:[],
      password:[],
    }
  )
}
onSubmit()
{
  let un:string=this.loginform.controls['username'].value;
  let ps:string=this.loginform.controls['password'].value;

  if(un==='admin' && ps==='admin@123')
  {
    alert('User is an Admin...!')
    sessionStorage.setItem('userType','admin')
    this.router.navigateByUrl('userdash/admin')
  }
  else if (un==='re' && ps==='re@123')
  {
    alert('User is Relational Executive')
    sessionStorage.setItem('userType','re')
    this.router.navigateByUrl('userdash/re')
  }
  else if (un==='oe' && ps==='oe@123')
  {
    alert('User is Operational Executive')
    sessionStorage.setItem('userType','oe')
    this.router.navigateByUrl('userdash/oe')
  }
  else if (un==='cm' && ps==='cm@123')
  {
    alert('User is Credit Manager')
    sessionStorage.setItem('userType','cm')
    this.router.navigateByUrl('userdash/cm')
  }
  else if (un==='ah' && ps==='ah@123')
  {
    alert('User is Account Head')
    sessionStorage.setItem('userType','ah')
    this.router.navigateByUrl('userdash/ah')
  }
   else if (un==='customer' && ps==='customer@123')
  {
    alert('User is Customer')
    sessionStorage.setItem('userType','customer')
    this.router.navigateByUrl('userdash/customer')
  }
  else
  {
    alert('Enter the Valid Authentication Details...!')
  }
}
}
