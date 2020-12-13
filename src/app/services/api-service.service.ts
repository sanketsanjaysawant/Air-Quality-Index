import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AqiResponse } from '../interfaces/aqi-response';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  limit: number = 10;
  offset: number = 0;
  apiKey: string = "579b464db66ec23bdd000001d7714733d718466b50dccb7002f16bfe";

  arrBirds = [];
  records: any = [];
  constructor(private httpClient: HttpClient) { }

  setlimit(value) {
    this.limit = value;
    this.getIndex().subscribe(data => {
      this.arrBirds = data.records;
    });
  }

  getIndex(): Observable<AqiResponse> {
    return this.httpClient.get<AqiResponse>('https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=' + this.apiKey + '&format=json&offset=' + this.offset + '&limit=' + this.limit)
  }
}
