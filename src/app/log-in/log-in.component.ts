import { Component } from '@angular/core';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  modelLog: any= {};

  email = this.modelLog.email;
  password = this.modelLog.password;


  logIn(){}
}
