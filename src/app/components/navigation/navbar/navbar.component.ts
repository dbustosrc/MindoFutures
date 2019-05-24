import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from 'src/app/components/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [LoginComponent, MatDialog]
})
export class NavBarComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor(
    public loginDialog: MatDialog
  ) { }

  ngOnInit() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  public openLoginDialog() {
    this.loginDialog.open(LoginComponent);
  }

}
