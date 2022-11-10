import { Component, OnInit, Input } from '@angular/core';
import { UserDetails } from 'src/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() currentTabState: string = "login";
  @Input() changeTabCallback: any
  @Input() changeUserData: any
  @Input() userData: UserDetails = {
    id: null,
    accountNumber: null, 
    name: null,
    middleName: null,
    lastName: null,
    userName: null,
    securityQuestion: null,
    securityAnswer: null,
    accountType: null,
    mobileNumber: null,
    accountBalance: null,
    setPin: false
  };

  constructor() { }

  handleTabChange = (event: any) => {
    let elementId: string = (event.target as Element).id;
    this.changeTabCallback(elementId);
  }

  logout = () => {
    this.changeUserData({
      id: null,
      accountNumber: null, 
      name: null,
      middleName: null,
      lastName: null,
      userName: null,
      securityQuestion: null,
      securityAnswer: null,
      accountType: null,
      mobileNumber: null,
      accountBalance: null,
      setPin: false
    });
    this.changeTabCallback("login");
  }


  ngOnInit(): void {
  }

}
