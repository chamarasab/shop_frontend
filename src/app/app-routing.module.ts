import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStocksComponent } from './stocks/all-stocks/all-stocks.component';

const routes: Routes = [
  {
    path: '',
    component: AllStocksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
