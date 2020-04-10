import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

let headers;
const urlServer: string = "http://109.10.241.247/";
const urlGeoServer: string = "https://restcountries.eu/rest/v2/";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) {
    headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    headers.append('Access-Control-Allow-Origin', '*');
  }

  public doGet(path: string) : Observable<any>{
    return this.http
      .get(urlServer.concat(path), headers)
  }

  public doPost(path: string, body: any) : Observable<any> {
    return this.http
      .post(urlServer.concat(path), body, headers)
  }

  public getCountries(keyword: string) : Observable<any>{
    let url = keyword ? urlGeoServer + "name/" + keyword : urlGeoServer;
    console.log(url);
    return this.http
      .get(url, headers)
  }

  public handleError (error: any) {
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return throwError(errMsg);
  }
}
