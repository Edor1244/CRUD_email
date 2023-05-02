import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from '../src/app/log-in/log-in.component'


const routes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'login', component: LogInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
