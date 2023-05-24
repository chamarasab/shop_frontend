import { Component, OnInit } from '@angular/core';
import { CreateStock } from '../create-stock';
import { StocksService } from '../stocks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-stocks',
  templateUrl: './add-stocks.component.html',
  styleUrls: ['./add-stocks.component.css']
})
export class AddStocksComponent implements OnInit {

  constructor(private stockService: StocksService, private router: Router) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  stocks: CreateStock = {
    name: '',
    price: '',
    quantity: ''
  }

  create() {
    this.stockService.create(this.stocks).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
