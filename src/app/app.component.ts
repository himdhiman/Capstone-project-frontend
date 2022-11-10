import { Component } from '@angular/core';
import { UserDetails } from 'src/models';
import { UsersDataService } from './services/users-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'capstoneFrontend';
  currentTabState: string = "login"
  userDetails: UserDetails = {
    id : null,
    accountNumber : null,
    name : null,
    middleName : null,
    lastName : null,
    userName : null,
    securityQuestion : null,
    securityAnswer : null,
    accountType : null,
    mobileNumber : null,
    accountBalance : null,
    setPin : false
  }
  private usersData: UsersDataService;


  constructor(usersData: UsersDataService) {
    this.usersData = usersData;
  }

  changeTabCallback = (tabValue: string): void => {
    this.currentTabState = tabValue;
  }

  changeUserData = (userData: UserDetails): void => {
    this.userDetails = userData;
  }

  onRefresh = () => {
    try{
      this.usersData.GetUser(this.userDetails.accountNumber ? this.userDetails.accountNumber: "").subscribe((data: any) => {
        this.userDetails = data;
        this.changeTabCallback("accountDetails");
      });
    }
    catch(err){
      console.error("Error occured while fetching the user data from API.")
    }
  }


  updateUserDetails = (userDetails: UserDetails) => {
    this.userDetails = userDetails;
  }
}
