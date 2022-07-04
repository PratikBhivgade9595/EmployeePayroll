import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/service/form/form.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dataList: any;


  constructor(private form: FormService, private route: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.employeeGetData();
  }


  employeeGetData(){
    this.form.employeeGet().subscribe((response)=>{
      this.dataList = response;
    })
  }

  addEmployee() {
    this.route.navigateByUrl("/form")
  }

  employeeDeleteData(data:any){
    this.form.employeeDelete(data.id).subscribe((response)=>{
      console.log(response);
    this.employeeGetData();  
    })
  }

  openDialog(value: any): void {
    const dialogRef = this.dialog.open((UpdateComponent), {
      width: "700px",
      height: "400px",
      data: value
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
}
