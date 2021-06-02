import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateaccountComponent } from './components/account/createaccount/createaccount.component';
import { AdminComponent } from './components/admin/admin.component';
import { AgentComponent } from './components/agent/agent.component';
import { HomeComponent } from './components/home/home.component';
import { InsuredComponent } from './components/insured/insured.component';
import { CreatepolicyComponent } from './components/policy/createpolicy/createpolicy.component';
import { ViewpolicyComponent } from './components/policy/viewpolicy/viewpolicy.component';
import { CreateuserComponent } from './components/user/createuser/createuser.component';
import { LoginComponent } from './components/user/login/login.component';

const routes: Routes = [
  {path: "", component: HomeComponent},

  {path: "home", component: HomeComponent},
  { path: 'login', component: LoginComponent },
  {path: "admin", component: AdminComponent},
  {path: "agent", component: AgentComponent},
  {path: "insured", component: InsuredComponent},
  {path: "createaccount", component: CreateaccountComponent},
  // {path: "createclaim", component: CreateClaimComponent},
  // {path: "viewclaim", component: ViewClaimComponent},
  {path: "createpolicy", component: CreatepolicyComponent},
  {path: "viewpolicy", component: ViewpolicyComponent},
  {path: "createuser", component: CreateuserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }