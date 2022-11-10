import { Component, OnInit, Input } from '@angular/core';
import { UsersDataService } from 'src/app/services/users-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() updateUserDetails: any
  @Input() changeTabCallback : any
  accountNumber: string = ""; 
  errorString: string = "";
  private userData: UsersDataService

  constructor(userData: UsersDataService) { 
    this.userData = userData;
  }

  validateAccountNumber = (AccountNumber: string): boolean => {
    if(AccountNumber.length != 10){
      return false;
    }
    return true
  }

  onChangeAccountNumber = (event: any) => {
    let nodeVal: string = event.target.value;
    this.accountNumber = nodeVal;
  } 

  onSubmit = (event: any) => {
    event.preventDefault()
    var isValid = this.validateAccountNumber(this.accountNumber);
    if (isValid){
      try{
        this.userData.GetUser(this.accountNumber).subscribe((data) => {
          this.updateUserDetails(data);
          this.changeTabCallback("accountDetails");
        }, (err) => {
          this.errorString = "Invalid Account Number";
        });
      }
      catch(err){
        console.error("Error occured while fetching the user data from API.")
      }
    }else {
      this.errorString = "Invalid Account Number";
    }
  }

  ngOnInit(): void {
  }

}
