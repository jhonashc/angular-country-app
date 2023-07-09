import { Component } from '@angular/core';

import { CountriesService } from '../../services/countries.service';

import { Country } from '../../interfaces/countries.interface';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {
  public term: Region = 'Americas';
  public countries: Country[] = [];
  public isLoading: boolean = false;

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  public selectedRegion: Region;

  constructor(private countriesService: CountriesService) {
    this.term = this.countriesService.cacheStore.byRegion.region;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
    this.countries = this.countriesService.cacheStore.byRegion.countries;
  }

  searchByRegion(region: Region): void {
    this.isLoading = true;
    this.selectedRegion = region;

    this.countriesService.searchByRegion(region).subscribe((countries) => {
      this.isLoading = false;
      this.countries = countries;
    });
  }
}
