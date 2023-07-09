import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BadgeNavComponent } from './components/badge-nav/badge-nav.component';
import { BadgeNavListComponent } from './components/badge-nav-list/badge-nav-list.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    BadgeNavComponent,
    BadgeNavListComponent,
    LoadingComponent,
    NavbarComponent,
    SearchBoxComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    BadgeNavComponent,
    BadgeNavListComponent,
    LoadingComponent,
    NavbarComponent,
    SearchBoxComponent,
  ],
})
export class SharedModule {}
