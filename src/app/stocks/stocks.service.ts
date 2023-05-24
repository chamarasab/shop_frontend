import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stocks } from './stocks';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Stocks[]>("http://localhost:3000/stocks");
  }
}

