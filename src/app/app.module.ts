import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { AccountDeatilsComponent } from './components/account-deatils/account-deatils.component';
import { ShowAccountNumberComponent } from './components/show-account-number/show-account-number.component';
import { FundTransferComponent } from './components/fund-transfer/fund-transfer.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { RegisterComponent } from './components/register/register.component';
import { AtmPinComponent } from './components/atm-pin/atm-pin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AccountDeatilsComponent,
    ShowAccountNumberComponent,
    FundTransferComponent,
    TransactionsComponent,
    RegisterComponent,
    AtmPinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
