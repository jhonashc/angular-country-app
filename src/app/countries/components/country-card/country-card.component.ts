import { Component, Input, OnInit } from '@angular/core';

import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'countries-country-card',
  templateUrl: './country-card.component.html',
})
export class CountryCardComponent implements OnInit {
  @Input()
  public country!: Country;

  ngOnInit(): void {
    if (!this.country) throw new Error('The country property is required');
  }
}
