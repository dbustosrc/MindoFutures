import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import { User, Status } from 'src/app/models/User';
import { Person, Gender } from 'src/app/models/Person';
import { $enum } from 'ts-enum-util';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  public user: User;
  public person: Person;
  public emailFormControl: FormControl;
  public genders;
  public doesMatchPassword: boolean;
  public passwordFormGroup: FormGroup;
  public matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder) {
    this.user = new User('', '', '', '', Status.Inactive);
    this.person = new Person('', '', '', Gender.Male, new Date(null));
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);

    this.passwordFormGroup = this.formBuilder.group({
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required]
    }, {
      validator: this.validatePasswordRepeat
    });
    this.genders = $enum(Gender).getKeys();
  }

  ngOnInit() {
  }

  public onSubmit(){
    this.user.email = this.emailFormControl.value;
    console.log(this.user);
    console.log(this.person);
  }

  public validatePasswordRepeat(passwordFormGroup: FormGroup) {
    let password = passwordFormGroup.controls.password.value;
    let passwordConfirmation = passwordFormGroup.controls.passwordConfirmation.value;
    
    if (passwordConfirmation.length <= 0) {
      return null;
    }

    if (passwordConfirmation !== password) {
      return {
          doesMatchPassword: true
      };
    }

    return null;
}
}