import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TododataService {
  url = 'http://localhost:3333/api';
  constructor(private _http: HttpClient) {
  }

  load(){
    this._http.get(this.url);
  }
}
