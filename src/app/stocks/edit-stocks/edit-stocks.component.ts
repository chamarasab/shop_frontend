import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StocksService} from "../stocks.service";
import {CreateStock} from "../create-stock";

@Component({
  selector: 'app-edit-stocks',
  templateUrl: './edit-stocks.component.html',
  styleUrls: ['./edit-stocks.component.css']
})
export class EditStocksComponent implements OnInit{
  constructor(private route:ActivatedRoute, private stocksService:StocksService,private router:Router) {}
  itemId:string = '';
  stocks: CreateStock = {
    name: '',
    price: '',
    quantity: ''
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.itemId = params.get('id') ?? "";
      this.getById();
    })
  }

  getById() {
    this.stocksService.getById(this.itemId).subscribe((data)=>{
      this.stocks.name = data.name;
      this.stocks.price = data.price;
      this.stocks.quantity = data.quantity;
    })
  }

  update() {
    this.stocksService.update(this.itemId, this.stocks).subscribe(()=>{
      this.router.navigate(['/'])
    })
  }
}
