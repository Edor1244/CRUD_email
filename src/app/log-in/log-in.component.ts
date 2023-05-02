import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  modelLog: any= {};

  email = this.modelLog.email;
  password = this.modelLog.password;

  constructor(private auth: AngularFireAuth) {}

  logIn(){
    this.auth.signInWithEmailAndPassword(this.email, this.password)
    .then(userCredential =>{

    })
    .catch(error => {
      console.error(error);
    });
  }
}
