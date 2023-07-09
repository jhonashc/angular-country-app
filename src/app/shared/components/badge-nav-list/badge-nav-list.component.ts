import { Component, Input } from '@angular/core';

import { BadgeNav } from '../../interfaces/badge.interface';

@Component({
  selector: 'shared-badge-nav-list',
  templateUrl: './badge-nav-list.component.html',
})
export class BadgeNavListComponent {
  @Input()
  public badgeNavList: BadgeNav[] = [];
}
