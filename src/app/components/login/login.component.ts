import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [RegistrationComponent, MatDialog]
})
export class LoginComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    public registrationDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: RegistrationComponent
  ) { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
  }

  openRegistrationDialog(): void {
    this.registrationDialog.open(RegistrationComponent);
    this.dialogRef.close();
  }

}
