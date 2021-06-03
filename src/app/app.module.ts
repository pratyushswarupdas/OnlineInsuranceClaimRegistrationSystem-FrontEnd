import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/user/login/login.component';
import { CreatepolicyComponent } from './components/policy/createpolicy/createpolicy.component';
import { PolicyService } from './services/policy.service';
import { AccountService } from './services/account.service';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { AgentComponent } from './components/agent/agent.component';
import { InsuredComponent } from './components/insured/insured.component';
import { CreateaccountComponent } from './components/account/createaccount/createaccount.component';
import { ClaimService } from './services/claim.service';
import { CreateUserService } from './services/create-user.service';
import { CreateuserComponent } from './components/user/createuser/createuser.component';
import { ViewpolicyComponent } from './components/policy/viewpolicy/viewpolicy.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { CreateClaimComponent } from './components/claim/create-claim/create-claim.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';
import { ViewClaimComponent } from './components/claim/view-claim/view-claim.component';



@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    CreatepolicyComponent,
    HomeComponent,
    AdminComponent,
    AgentComponent,
    InsuredComponent,
    CreateaccountComponent,
    CreateuserComponent,
    ViewpolicyComponent,
    ErrorPageComponent,
    CreateClaimComponent,
    AboutUsComponent,
    ServicesPageComponent,
    ViewClaimComponent,
    
  


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [UserService,PolicyService,AccountService,ClaimService,CreateUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
