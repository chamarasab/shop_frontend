import { Component } from '@angular/core';
import { StocksService } from '../stocks.service';
import { Stocks } from '../stocks';

@Component({
  selector: 'app-all-stocks',
  templateUrl: './all-stocks.component.html',
  styleUrls: ['./all-stocks.component.css']
})
export class AllStocksComponent {
  constructor(private stocksService: StocksService) { }

  stocks: Stocks[] = [];

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.stocksService.get().subscribe((data) => {
      this.stocks = data;
    });
  }
}
