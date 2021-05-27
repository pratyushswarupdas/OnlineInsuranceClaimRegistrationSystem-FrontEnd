import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AccountComponent } from './components/account/account.component';
import { ClaimComponent } from './components/claim/claim.component';
import { PolicyComponent } from './components/policy/policy.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AccountComponent,
    ClaimComponent,
    PolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
