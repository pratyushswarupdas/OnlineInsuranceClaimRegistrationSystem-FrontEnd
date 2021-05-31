import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AccountComponent } from './components/account/account.component';
import { ClaimComponent } from './components/claim/claim.component';
import { PolicyComponent } from './components/policy/policy.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/user/login/login.component';
import { CreatepolicyComponent } from './components/policy/createpolicy/createpolicy.component';
import { PolicyService } from './services/policy.service';
import { AccountService } from './services/account.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AccountComponent,
    ClaimComponent,
    PolicyComponent,
    LoginComponent,
    CreatepolicyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService,PolicyService,AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
