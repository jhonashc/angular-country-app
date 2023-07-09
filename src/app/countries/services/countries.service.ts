import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';

import { CacheStore } from '../interfaces/cash-store.interface';
import { Country } from '../interfaces/countries.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private _BASE_URL: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  };

  constructor(private httpClient: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage(): void {
    const cacheStorage: string | null = localStorage.getItem('cacheStore');

    if (!cacheStorage) return;

    this.cacheStore = JSON.parse(cacheStorage);
  }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url: string = `${this._BASE_URL}/alpha/${code}`;
    return this.httpClient.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }

  searchByCapital(capital: string): Observable<Country[]> {
    const url: string = `${this._BASE_URL}/capital/${capital}`;
    return this.getCountriesRequest(url).pipe(
      tap((countries) => {
        this.cacheStore.byCapital = {
          term: capital,
          countries,
        };
      }),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchByCountry(country: string): Observable<Country[]> {
    const url: string = `${this._BASE_URL}/name/${country}`;
    return this.getCountriesRequest(url).pipe(
      tap((countries) => {
        this.cacheStore.byCountry = {
          term: country,
          countries,
        };
      }),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchByRegion(region: Region): Observable<Country[]> {
    const url: string = `${this._BASE_URL}/region/${region}`;
    return this.getCountriesRequest(url).pipe(
      tap((countries) => {
        this.cacheStore.byRegion = {
          region,
          countries,
        };
      }),
      tap(() => this.saveToLocalStorage())
    );
  }
}
