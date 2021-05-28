import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicyComponent } from './components/policy/policy.component';
import { LoginComponent } from './components/user/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: "policy", component: PolicyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }