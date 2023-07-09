import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'countries-country-card-list',
  templateUrl: './country-card-list.component.html',
})
export class CountryCardListComponent {
  @Input()
  public countryList: Country[] = [];
}
