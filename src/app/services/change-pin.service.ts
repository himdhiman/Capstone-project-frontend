import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChangePinService {

  constructor(private http: HttpClient) { }

  ChangePin = (postData: any) => {
    return this.http.post(`https://localhost:7038/api/ChangePin`, postData)
  }
}
