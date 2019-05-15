import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  
  public postCollection:any;
  ngOnInit() {
    this.http.get('https://api.myjson.com/bins/mfzby',{responseType:'text'}).subscribe(res=>{
      var obj = JSON.parse(res);
      this.postCollection = obj.post;
    })
  }
}
