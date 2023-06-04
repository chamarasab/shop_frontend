import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllStocksComponent } from './stocks/all-stocks/all-stocks.component';
import { HttpClientModule } from '@angular/common/http';
import { AddStocksComponent } from './stocks/add-stocks/add-stocks.component';
import { FormsModule } from '@angular/forms';
import { EditStocksComponent } from './stocks/edit-stocks/edit-stocks.component';

@NgModule({
  declarations: [
    AppComponent,
    AllStocksComponent,
    AddStocksComponent,
    EditStocksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
