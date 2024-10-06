import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emi-caculator',
  templateUrl: './emi-caculator.component.html',
  styleUrl: './emi-caculator.component.css'
})
export class EmiCaculatorComponent {
  top: number;
  monthlyInterestRatio: number;
  bottom: number;
  sp: number;
  full: number;

  emi: number;
  interestt: number;
  total: number;

  constructor(public fb: FormBuilder) { }

  emiForm: FormGroup;
  ngOnInit(): void {
    this.emiForm = this.fb.group({
      principal: ['', Validators.required],
      interest: ['', Validators.required],
      tenure: ['', Validators.required]
    })
  }
  update() {
    this.monthlyInterestRatio = (this.emiForm.value.interest / 100) / 12;
    this.top = Math.pow((1 + this.monthlyInterestRatio), this.emiForm.value.tenure);
    this.bottom = this.top - 1;
    this.sp = this.top / this.bottom;
    this.emi = ((this.emiForm.value.principal * this.monthlyInterestRatio) * this.sp);
    this.full = this.emiForm.value.tenure * this.emi;
    this.interestt = this.full - this.emiForm.value.principal;
  }
}
