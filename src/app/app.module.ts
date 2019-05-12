import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';

import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './Home/Home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
   declarations: [
      AppComponent,
      EmployeeComponent,
      HomeComponent,
      SidebarComponent,
      NavbarComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      NgbModule
   ],
   providers: [],
   bootstrap: [
      AppComponent,
   ]
})
export class AppModule { }
