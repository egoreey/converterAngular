import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyConverterComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
