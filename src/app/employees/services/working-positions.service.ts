import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {WorkingPosition} from '../interfaces/working-position';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkingPositionsService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<WorkingPosition[]> {
    return this.http.get<WorkingPosition[]>(this.apiUrl + 'working-positions');
  }
}
