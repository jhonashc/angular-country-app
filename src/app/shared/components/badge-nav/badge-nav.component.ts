import { Component, Input, OnInit } from '@angular/core';

import { BadgeNav } from '../../interfaces/badge.interface';

@Component({
  selector: 'shared-badge-nav',
  templateUrl: './badge-nav.component.html',
})
export class BadgeNavComponent implements OnInit {
  @Input()
  public badge!: BadgeNav;

  ngOnInit(): void {
    if (!this.badge) throw new Error('The badge property is required');
  }
}
