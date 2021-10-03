import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IssModel } from '../models/iss';

@Injectable({
  providedIn: 'root'
})
export class IssService {

  constructor(private http: HttpClient) { }

  getCoordinates(): Observable<IssModel> {
    return this.http.get<IssModel>(environment.apiUrl);
  }
}
