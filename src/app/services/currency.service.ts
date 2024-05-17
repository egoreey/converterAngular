import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = 'https://www.cbr-xml-daily.ru/daily_json.js';

  constructor(private http: HttpClient) {}

  getRates(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map((response: any) => response.Valute)
    );
  }
}

