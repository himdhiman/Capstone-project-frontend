import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  RegisterUser = (postData: any) => {
    return this.http.post(`https://localhost:7038/api/users/User`, postData)
  }
}
