import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formModel } from './form.model';
import { FormService } from 'src/app/service/form/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  employeeForm!: FormGroup;
  submitted = false;
  formModelObj: formModel = new formModel();

  constructor(private formBuilder: FormBuilder, private form: FormService, private route: Router) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      profileImg: ['', Validators.required],
      gender: ['', Validators.required],
      salary: ['', Validators.required],
      day: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
      note: ['', Validators.required],


    })
  }

  get f() { return this.employeeForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.employeeForm.invalid) {
       return;

     
    }
  }

  employeeFormDetailPost() {
    this.formModelObj.name = this.employeeForm.value.name;
    this.formModelObj.gender = this.employeeForm.value.gender;
    this.formModelObj.profileImg = this.employeeForm.value.profileImg;
    this.formModelObj.day = this.employeeForm.value.day;
    this.formModelObj.salary = this.employeeForm.value.salary;
    this.formModelObj.month = this.employeeForm.value.month;
    this.formModelObj.year = this.employeeForm.value.year;

    this.form.employeePost(this.formModelObj).subscribe((response) => {
      console.log(response);
      this.employeeForm.reset();
      this.route.navigateByUrl("/dashboard")
    })

  }

  onReset() {
    this.submitted = false;
    this.employeeForm.reset();
  }

  // submit() {
  //   this.route.navigateByUrl("/dashboard")
  // }
}
