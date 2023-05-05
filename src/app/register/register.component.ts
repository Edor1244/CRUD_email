import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { HttpClientModule } from '@angular/common/http';
import { idToken } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(public auth: AngularFireAuth,private router: Router,private db: AngularFireDatabase) {};


  modelRegister: any = {}


  back2Login(){
    this.router.navigate(['/login']);
  }

 async createNewUser(){
  const email = this.modelRegister.email;
  const password = this.modelRegister.password;

  this.auth.createUserWithEmailAndPassword(email,password)
  .then(userCredential => {
    console.log('se creo usuario');
    this.router.navigate(['/inicioCartas']);
    let userUid = userCredential.user?.uid ?? '';
    let tokenUidobjetc = JSON.parse(JSON.stringify(userCredential.user));
    let tokenuidcode = tokenUidobjetc.stsTokenManager.accessToken;
    localStorage.setItem('userUid', userUid)
    localStorage.setItem('tokenUid', tokenuidcode)
    console.log(tokenuidcode);
    console.log(userUid);
}).catch(error => {
    alert('No se creo un carajo')
  });
  }
}
