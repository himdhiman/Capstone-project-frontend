import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }

  GetTransactions = (AccountNumber: string | null) => {
    return this.http.get(`https://localhost:7038/api/Transaction/${AccountNumber}`)
  }
}
