import { Component, OnInit } from '@angular/core';
import {Country} from "../../models/country";
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor(public sharedService: SharedService) {}
  selectedCountry: string;
  countries: Country[];

  ngOnInit(): void {
    this.searchCountries('');
  }

  searchCountries(keyword: string): void {
    this.sharedService.getCountries(keyword)
      .subscribe(
        data => {
          this.countries = data
        },
        err => {
          console.log(err) ;
        }) ;
  }
}

