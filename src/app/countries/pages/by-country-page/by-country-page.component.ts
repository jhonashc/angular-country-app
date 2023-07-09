import { Component } from '@angular/core';

import { CountriesService } from '../../services/countries.service';

import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {
  public term: string = '';
  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService) {
    this.term = countriesService.cacheStore.byCountry.term;
    this.countries = countriesService.cacheStore.byCountry.countries;
  }

  searchByCountry(country: string): void {
    this.isLoading = true;

    this.countriesService.searchByCountry(country).subscribe((countries) => {
      this.isLoading = false;
      this.countries = countries;
    });
  }
}
