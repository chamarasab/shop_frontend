import { Component } from '@angular/core';
import { StocksService } from '../stocks.service';
import { Stocks } from '../stocks';

declare var window:any;
@Component({
  selector: 'app-all-stocks',
  templateUrl: './all-stocks.component.html',
  styleUrls: ['./all-stocks.component.css']
})
export class AllStocksComponent {
  constructor(private stocksService: StocksService) { }

  stocks: Stocks[] = [];
  deleteModal:any;
  itemToDelete: string = '';

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(document.getElementById("deleteModal"));
    this.getAll();
  }

  openDeletePopup(id: string){
    this.itemToDelete = id;
    this.deleteModal.show();
  }

  getAll() {
    this.stocksService.get().subscribe((data) => {
      this.stocks = data;
    });
  }

  delete() {
    this.stocksService.delete(this.itemToDelete).subscribe(() => {
      this.stocks = this.stocks.filter(_=>_._id !== this.itemToDelete)
      this.deleteModal.hide();
    })
  }
}
