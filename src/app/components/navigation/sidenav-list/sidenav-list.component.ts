import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from 'src/app/components/login/login.component';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss'],
  providers: [LoginComponent, MatDialog]
})
export class SidenavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  constructor(
    public loginDialog: MatDialog
  ) { }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  public openLoginDialog() {
    this.onSidenavClose();
    this.loginDialog.open(LoginComponent);
  }

}
