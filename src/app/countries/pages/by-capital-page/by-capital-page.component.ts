import { Component, OnInit } from '@angular/core';

import { CountriesService } from '../../services/countries.service';

import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent implements OnInit {
  public term: string = '';
  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.term = this.countriesService.cacheStore.byCapital.term;
    this.countries = this.countriesService.cacheStore.byCapital.countries;
  }

  searchByCapital(capital: string): void {
    this.isLoading = true;

    this.countriesService.searchByCapital(capital).subscribe((countries) => {
      this.isLoading = false;
      this.countries = countries;
    });
  }
}
