import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CreateaccountComponent } from './components/account/createaccount/createaccount.component';
import { AdminComponent } from './components/admin/admin.component';
import { AgentComponent } from './components/agent/agent.component';
import { CreateClaimComponent } from './components/claim/create-claim/create-claim.component';
import { ViewClaimComponent } from './components/claim/view-claim/view-claim.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomeComponent } from './components/home/home.component';
import { InsuredComponent } from './components/insured/insured.component';
import { CreatepolicyComponent } from './components/policy/createpolicy/createpolicy.component';
import { ViewpolicyComponent } from './components/policy/viewpolicy/viewpolicy.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';
import { CreateuserComponent } from './components/user/createuser/createuser.component';
import { LoginComponent } from './components/user/login/login.component';

const routes: Routes = [
                        {path: "", component: HomeComponent},
                        {path: "home", component: HomeComponent},
                        {path: "aboutus", component: AboutUsComponent},
                        {path: "service", component: ServicesPageComponent},
                        {path: 'login', component: LoginComponent},

                        {path: "admin", component: AdminComponent,
                          children:[
                                    {path: "createuser", component: CreateuserComponent},
                                    {path: "createaccount", component: CreateaccountComponent},                        
                                    {path: "createpolicy", component: CreatepolicyComponent},
                                    {path: "viewpolicy", component: ViewpolicyComponent},
                                    {path: "createclaim", component: CreateClaimComponent},
                                    {path: "viewclaim", component: ViewClaimComponent},
                                    ]
                        },

                        {path: "agent", component: AgentComponent,
                                    children:[{path: "createaccount", component: CreateaccountComponent},
                                    {path: "createclaim", component: CreateClaimComponent},
                                    {path: "viewclaim", component: ViewClaimComponent},
                                    {path: "createpolicy", component: CreatepolicyComponent},
                                    {path: "viewpolicy", component: ViewpolicyComponent},]
                        },

                        {path: "insured", component: InsuredComponent,
                                    children:[{path: "viewpolicy", component: ViewpolicyComponent},
                                    {path: "createclaim", component: CreateClaimComponent},
                                    {path: "viewclaim", component: ViewClaimComponent},
                                  ]
                        },


                        // {path: "createaccount", component: CreateaccountComponent},
                        // // {path: "createclaim", component: CreateClaimComponent},
                        // // {path: "viewclaim", component: ViewClaimComponent},
                        // {path: "createpolicy", component: CreatepolicyComponent},
                        // {path: "viewpolicy", component: ViewpolicyComponent},
                        // {path: "createuser", component: CreateuserComponent},
                        {path: "**", component: ErrorPageComponent},

                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }