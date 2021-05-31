import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatepolicyComponent } from './components/policy/createpolicy/createpolicy.component';
import { PolicyComponent } from './components/policy/policy.component';
import { LoginComponent } from './components/user/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: "policy", component: PolicyComponent},
  {path: "createpolicy", component: CreatepolicyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }