import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public categories:any;
  ngOnInit() {
    this.http.get('https://api.myjson.com/bins/yiv72',{responseType:'text'}).subscribe(res=>{
      var obj = JSON.parse(res);
      this.categories = obj.categories;
    })
  }

}
