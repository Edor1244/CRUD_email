import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';




@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent{

  
  constructor(public auth: AngularFireAuth,private router: Router) {};

  modelLog: any= {};
 
  login() {
    const email = this.modelLog.email;
    const password = this.modelLog.password;
    
    this.auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log('se autentico usuario');
        this.router.navigate(['/inicioCartas']);
        let userUid = userCredential.user?.uid ?? '';
        let tokenUidobjetc = JSON.parse(JSON.stringify(userCredential.user));
        let tokenuidcode = tokenUidobjetc.stsTokenManager.accessToken;
        localStorage.setItem('userUid', userUid)
        localStorage.setItem('tokenUid', tokenuidcode)
        console.log(tokenuidcode);
        console.log(userUid);
      })
      .catch(error => {
        alert('Hay algun parametro incorrecto o vacio y eso no puede estar asi cabecita dura')
      });
  }

  registerNew(){
    this.router.navigate(['/register']);
  }
}
