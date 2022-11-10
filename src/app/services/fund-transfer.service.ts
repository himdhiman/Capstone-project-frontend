import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FundTransferService {

  constructor(private http: HttpClient) { }

  TransferFunds = (postData: any) => {
    return this.http.post(`https://localhost:7038/api/FundTransfer`, postData)
  }
}
