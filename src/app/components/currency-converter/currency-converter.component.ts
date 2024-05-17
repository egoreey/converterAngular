import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
  rates: any = {};
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  amount: number = 1;
  result: number | null = null;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getRates().subscribe((data) => {
      this.rates = data;
    });
  }

  convert(): void {
    if (this.fromCurrency && this.toCurrency && this.amount) {
      const fromRate = this.rates[this.fromCurrency].Value;
      const toRate = this.rates[this.toCurrency].Value;
      this.result = (this.amount * fromRate) / toRate;
    }
  }
}
