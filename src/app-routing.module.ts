import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './app/log-in/log-in.component';
import {RegisterComponent} from './app/register/register.component';
import { InicioCartasComponent } from './app/inicio-cartas/inicio-cartas.component';


const routes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'login', component: LogInComponent },
  {path: 'Register', component: RegisterComponent},
  {path: 'InicioCartas', component: InicioCartasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
