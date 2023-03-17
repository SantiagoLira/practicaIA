import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(private http: HttpClient) {}
  public test(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/index');
  }
}
