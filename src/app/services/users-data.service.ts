import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http: HttpClient) { }

  GetUser = (AccountNumber: string) => {
    return this.http.get(`https://localhost:7038/api/users/User/${AccountNumber}`)
  }
}
