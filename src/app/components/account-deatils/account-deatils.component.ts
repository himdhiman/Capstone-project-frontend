import { Component, OnInit, Input } from '@angular/core';
import { UserDetails } from 'src/models';

@Component({
  selector: 'app-account-deatils',
  templateUrl: './account-deatils.component.html',
  styleUrls: ['./account-deatils.component.css']
})
export class AccountDeatilsComponent implements OnInit {
  @Input() userData: UserDetails = {
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
  };
  @Input() onRefresh: any

  constructor() { 
  }

  refreshData = () => {
    console.log(this.userData);
    this.onRefresh()
  }

  ngOnInit(): void {
  }

}
