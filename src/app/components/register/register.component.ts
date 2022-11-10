import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  FirstName: string = "";
  MiddleName: string = "";
  LastName: string = "";
  UserName: string = "";
  PhoneNumber: string = "";
  AccountType: string = "";
  errorString: string = "";
  successString: string = "";
  returnedAccountNumber: string = "";
  private registerService: RegisterService
  

  constructor(registerService: RegisterService) { 
    this.registerService = registerService
  }

  onChangeFirstName = (event: any) => {
    let nodeVal: string = event.target.value;
    this.FirstName = nodeVal;
  } 
  onChangeMiddleName = (event: any) => {
    let nodeVal: string = event.target.value;
    this.MiddleName = nodeVal;
  }
  onChangeLastName = (event: any) => {
    let nodeVal: string = event.target.value;
    this.LastName = nodeVal;
  }

  onChangeUserName = (event: any) => {
    let nodeVal: string = event.target.value;
    this.UserName = nodeVal;
  }

  onChangePhoneNumber = (event: any) => {
    let nodeVal: string = event.target.value;
    this.PhoneNumber = nodeVal;
  }

  onChangeAccountType = (event: any) => {
    let nodeVal: string = event.target.value;
    this.AccountType = nodeVal;
  }

  validateData = (): boolean => {
    if(this.FirstName === ""){
      this.errorString = "First Name required !";
      return false;
    }
    if(this.UserName === ""){
      this.errorString = "User Name required !";
      return false;
    }
    if(this.PhoneNumber === ""){
      this.errorString = "Phone Number required !";
      return false;
    }
    if(this.AccountType === ""){
      this.errorString = "Account Type required !";
      return false;
    }else if (this.AccountType !== "Savings" && this.AccountType !== "Current"){
      this.errorString = "Invalid Account Type. (Savings / Current)"
      return false;
    }
    return true;
  }


  onSubmit = (event: any) => {
    event.preventDefault()
    var isValid = this.validateData()
    if(isValid){
      try{
        var payload = {
          "name": this.FirstName,
          "middleName": this.MiddleName,
          "lastName": this.LastName,
          "userName": this.UserName,
          "password": "pass@123",
          "securityQuestion": "string",
          "securityAnswer": "string",
          "accountTypeId": this.AccountType,
          "mobileNumber": this.PhoneNumber
        }
        this.registerService.RegisterUser(payload).subscribe((data: any) => {
          this.successString = "User Registered Successfully";
          this.returnedAccountNumber = data.accountNumber;
        }, (err) => {
          this.errorString = err;
        });
      }
      catch(err){
        console.error("Error occured while fetching the user data from API.")
      }
    }
  }

  ngOnInit(): void {
  }

}
