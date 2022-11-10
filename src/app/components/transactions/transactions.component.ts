import { Component, OnInit, Input } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';
import { Transaction } from 'src/models';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  @Input() accountNumber: string | null = "";
  transactions: Transaction[] = [];
  private transactionService: TransactionsService

  constructor(transactionService: TransactionsService) { 
    this.transactionService = transactionService
  }

  ngOnInit(): void {
    try{
      this.transactionService.GetTransactions(this.accountNumber).subscribe((data: any) => {
        this.transactions = data;
      }, (err) => {
        console.error("Invalid Account Number");
      });
    }
    catch(err){
      console.error("Error occured while fetching the user data from API.")
    }
  }

}
