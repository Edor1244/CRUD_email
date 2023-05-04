import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(public auth: AngularFireAuth,private router: Router) {};


  modelRegister: any = {}


  back2Login(){
    this.router.navigate(['/login']);
  }

 async createNewUser(){
  console.log(this.modelRegister)
  const email = this.modelRegister.email;
  const password = this.modelRegister.password;

  this.auth.createUserWithEmailAndPassword(email,password)
  .then(userCredential => {
    console.log('se creo usuario');
    this.router.navigate(['/inicioCartas']);
  }).catch(error => {
    alert('No se creo un carajo')
  });
  }
}
