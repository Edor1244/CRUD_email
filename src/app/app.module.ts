import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { InicioCartasComponent } from './inicio-cartas/inicio-cartas.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LogInComponent,
    InicioCartasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
