import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private Clientehttp:HttpClient) {

  }
  public test():
  Observable<any>{
    return this.Clientehttp.get("http://localhost:8000/index"   
    )
  }
}
