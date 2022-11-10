import { Component, OnInit, Input } from '@angular/core';
import { FundTransferService } from 'src/app/services/fund-transfer.service';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {
  @Input() sourceAccountNumber: string | null = "";
  destinationAccountNumber: string = "";
  amount: number = 0.00;
  errorString: string | null = null;
  successString: string | null = null;
  private fundTransfer: FundTransferService

  constructor(fundTransfer: FundTransferService) { 
    this.fundTransfer = fundTransfer;
  }

  validateAccountNumber = (AccountNumber: string | null): boolean => {
    if(!AccountNumber){
      this.errorString = "Invalid Account Number !";
      return false; 
    }
    if(AccountNumber.length != 10){
      this.errorString = "Invalid Account Number !";
      return false;
    }
    return true;
  }

  validateAmount = (value: number): boolean => {
    if(value <= 0.00){
      this.errorString = "Invalid Amount !";
      return false;
    }
    return true;
  }

  onChangeDestinationAccountNumber = (event: any) => {
    let nodeVal: string = event.target.value;
    this.destinationAccountNumber = nodeVal;
  }
  onChangeAmount = (event: any) => {
    let nodeVal: string = event.target.value;
    this.amount = parseFloat(nodeVal);
  }

  onSubmit = (event: any) => {
    this.successString = "";
    event.preventDefault()
    var isValidDestination = this.validateAccountNumber(this.destinationAccountNumber);
    var isValidAmount = this.validateAmount(this.amount);
    if (isValidDestination && isValidAmount){
      try{
        this.errorString = "";
        var payload = {
          "sourceAccountNumber": parseInt(this.sourceAccountNumber ? this.sourceAccountNumber : "0"),
          "destinationAccountNumber": parseInt(this.destinationAccountNumber),
          "transferAmount": this.amount
        }
        this.fundTransfer.TransferFunds(payload).subscribe(() => {
          this.successString = "Funds Transfer Successfull";
        }, (err) => {
          this.errorString = "Invalid Account Number";
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
