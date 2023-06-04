import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-stocks',
  templateUrl: './edit-stocks.component.html',
  styleUrls: ['./edit-stocks.component.css']
})
export class EditStocksComponent implements OnInit{
  constructor(private route:ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      params.get('')
    })
  }
}
