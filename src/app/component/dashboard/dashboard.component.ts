import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/service/form/form.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dataList: any;


  constructor(private form: FormService, private route: Router) { }

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
  // employeeDeleteData(data:any){
  //   this.form.employeeDelete(data.id).subscribe((response)=>{
  //     console.log(response);
      
  //   })
  // }
}
