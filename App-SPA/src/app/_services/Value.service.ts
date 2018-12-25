import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Value } from '../_models/value';

@Injectable({
  providedIn: 'root'
})
export class ValueService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getValue(id): Observable<Value> {
    return this.http.get<Value>(this.baseUrl + 'values/' + id);
  }
}
