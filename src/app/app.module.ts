import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBjI0HPJD6E63YBDSrBm7FKKKMRZ_s2Rvw",
  authDomain: "angular-crud-eec.firebaseapp.com",
  databaseURL: "https://angular-crud-eec-default-rtdb.firebaseio.com",
  projectId: "angular-crud-eec",
  storageBucket: "angular-crud-eec.appspot.com",
  messagingSenderId: "789128205957",
  appId: "1:789128205957:web:469cfd0dba3d056af2bbec"
};

const app = initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
