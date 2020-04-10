import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SharedService } from "./shared.service";
import {Inneed} from "../models/inneed";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(public sharedService: SharedService) {}

  saveInneed(innedd: Inneed): Observable<any> {
    return this.sharedService.doPost("person", innedd)
  }

}
