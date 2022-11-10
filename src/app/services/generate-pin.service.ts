import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GeneratePinService {

  constructor(private http: HttpClient) { }

  GeneratePin = (postData: any) => {
    return this.http.post(`https://localhost:7038/api/SetPin`, postData)
  }
}
