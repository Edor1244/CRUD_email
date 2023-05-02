import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/app';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent{

  constructor(public auth: AngularFireAuth) {}

  modelLog: any= {};
 
  login() {
    const email = this.modelLog.email;
    const password = this.modelLog.password;
    
    this.auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log('se inicio sesion');
      })
      .catch(error => {
        console.log('No se inicio sesion');
      });
  }
}
