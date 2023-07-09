import { Component } from '@angular/core';

import { BadgeNav } from './shared/interfaces/badge.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string = 'country-app';

  public badgeNavList: BadgeNav[] = [
    {
      name: 'Capital',
      route: 'by-capital',
      prefix: 'countries',
    },
    {
      name: 'Country',
      route: 'by-country',
      prefix: 'countries',
    },
    {
      name: 'Region',
      route: 'by-region',
      prefix: 'countries',
    },
  ];
}
