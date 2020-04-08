import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';


// /** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

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

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(){
    this.identityFormGroup = this._formBuilder.group({
      identityCtrl: ['', Validators.required]
    });
    this.adressFormGroup = this._formBuilder.group({
      adressCtrl: ['', Validators.required]
    });
    this.contactFormGroup = this._formBuilder.group({
      contactCtrl: ['', Validators.required, Validators.email]
    });
  }
  //
  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);
  //
  // matcher = new MyErrorStateMatcher();
}
