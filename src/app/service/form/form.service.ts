import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { formModel } from 'src/app/component/form/form.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {


  constructor(private http: HttpClient) { }


  employeePost(data: any) {
    return this.http.post<any>("http://localhost:3000/posts", data)
      .pipe(map((resource: any) => {
        return resource;
      }))
  }

  employeeGet(){
    return this.http.get<any>("http://localhost:3000/posts")
      .pipe(map((resource: any) => {
        return resource;
      }))
  }

  employeeDelete(id:number) {
    return this.http.delete<any>("http://localhost:3000/posts/" +id)
      .pipe(map((resource: any) => {
        return resource;
      }))
  }
}
