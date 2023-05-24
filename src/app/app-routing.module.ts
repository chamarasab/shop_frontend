import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStocksComponent } from './stocks/all-stocks/all-stocks.component';
import { AddStocksComponent } from './stocks/add-stocks/add-stocks.component';

const routes: Routes = [
  {
    path: '',
    component: AllStocksComponent
  },
  {
    path: 'add-stock',
    component: AddStocksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
