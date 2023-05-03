import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent{

  constructor(public auth: AngularFireAuth) {};

  modelLog: any= {};
 
  login() {
    
    var isUserLogin:string = '';
    const email = this.modelLog.email;
    const password = this.modelLog.password;
    
    this.auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log('se autentico usuario')
      })
      .catch(error => {
        console.log('aun no lo logras mano')
      });
  }
}
