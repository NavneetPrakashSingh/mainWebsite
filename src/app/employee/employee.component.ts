import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // production link: https://makemetechieapi.herokuapp.com/hello
    // development link: http://localhost:8080/hello
    this.http.get('https://makemetechieapi.herokuapp.com/hello',{responseType:'text'}).subscribe(res=>{
      alert(res);
    })
  }

}
