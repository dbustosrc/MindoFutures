import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { ComponentPageTitle } from '../../page-title/page-title';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { NavigationFocusModule } from '../navigation-focus/navigation-focus';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ComponentPageTitle]
})
export class HeaderComponent {

  @Output() public toggleSidenav = new EventEmitter<void>();
  
  constructor(
    public _componentPageTitle: ComponentPageTitle
  ) { }

  getTitle() {
    return this._componentPageTitle.title;
  }
}

@NgModule({
  imports: [MatButtonModule, MatIconModule, NavigationFocusModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  providers: [ComponentPageTitle],
})
export class HeaderModule { }