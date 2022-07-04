import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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
    
  constructor(public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
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
}
