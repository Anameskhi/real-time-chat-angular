import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Test } from '../interfaces/test.interface';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  // constructor(
  //   private http: HttpClient
  // ) { }

  // getTest(): Observable<Test>{
  //   return this.http.get<Test>('api')
  // }
}
