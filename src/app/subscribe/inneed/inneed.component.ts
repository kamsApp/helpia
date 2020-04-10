import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {Inneed} from "../../models/inneed";
import {ErrorStateMatcher} from "@angular/material/core";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {

  isErrorDefaultState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidParent = control && control.touched && control.parent.invalid;
    return invalidParent || this.isErrorDefaultState(control, form);
  }
}

@Component({
  selector: 'app-inneed',
  templateUrl: './inneed.component.html',
  styleUrls: ['./inneed.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class SubscribeInneedComponent implements OnInit {
  identityFormGroup: FormGroup;
  adressFormGroup: FormGroup;
  contactFormGroup: FormGroup;

  required: string = "Champ obligatoire";


  matcher = new MyErrorStateMatcher();
  private inneed: Inneed = new Inneed();

  constructor(private defaultMatcher: ErrorStateMatcher, private _formBuilder: FormBuilder) { }

  ngOnInit(){
    this.identityFormGroup = this._formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      numberPersons: ['', Validators.required],
    });
    this.adressFormGroup = this._formBuilder.group({
      address: ['', Validators.required],
      complAddress: [''],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required]
    });
    this.contactFormGroup = this._formBuilder.group({
      phonePrefix: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });

    this.identityFormGroup.valueChanges.subscribe(data => {
      Object.assign(this.inneed, data);
      console.log(this.inneed);
    });
    this.adressFormGroup.valueChanges.subscribe(data => {
      Object.assign(this.inneed, data);
      console.log(this.inneed);
    });
    this.contactFormGroup.valueChanges.subscribe(data => {
      Object.assign(this.inneed, data);
      console.log(this.inneed);
    });
  }
}
