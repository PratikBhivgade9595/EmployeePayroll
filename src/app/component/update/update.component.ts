import { Component, OnInit,Inject } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormService } from 'src/app/service/form/form.service';
import { formModel } from '../../../app/component/form/form.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  name: any;
  profileImg: any;
      gender: any;
      salary: any;
      day: any;
      month: any;
      year: any;
      note: any;
      formModelObj: formModel = new formModel();
      id: any;
      dataList: any;

  constructor(public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private form: FormService) { 
      this.id = data.id
      this.name = data.name
      this.profileImg = data.profileImg
      this.gender = data.gender
      this.salary = data.salary
      this.day = data.day
      this.month = data.month
      this.year = data.year
      this.note = data.note
    }

  ngOnInit(): void {
    
  }

 

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateEmployee() {
    this.formModelObj.name = this.name;
    this.formModelObj.gender = this.gender;
    this.formModelObj.profileImg = this.profileImg;
    this.formModelObj.day = this.day;
    this.formModelObj.salary = this.salary;
    this.formModelObj.month = this.month;
    this.formModelObj.year = this.year;
    this.formModelObj.note = this.note;
    this.formModelObj.id = this.id;
    
    this.form.employeeUpdate(this.formModelObj,this.formModelObj.id).subscribe((response) => {
      console.log(response);
      
    })

  }
}
