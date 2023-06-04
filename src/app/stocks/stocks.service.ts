import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stocks } from './stocks';
import { CreateStock } from './create-stock';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Stocks[]>("http://localhost:3000/stocks");
  }

  create(stock: CreateStock) {
    return this.http.post("http://localhost:3000/stocks", stock);
  }

  getById(id:string) {
    return this.http.get<Stocks>(`http://localhost:3000/stocks/${id}`)
  }

  update(id:string, stock:CreateStock) {
    return this.http.put(`http://localhost:3000/stocks/${id}`,stock);
  }

  delete(id:string) {
    return this.http.delete(`http://localhost:3000/stocks/${id}`);
  }
}

