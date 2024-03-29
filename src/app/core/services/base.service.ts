import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  apiUrl = environment.apiUrl

  constructor(
    private http: HttpClient,
    public snackBar: MatSnackBar
  ) { }

  post<T>(url: string, body: any ): Observable<T>{
    return this.http.post<T>(this.apiUrl + url, body)
  }

  get<T>(url: string): Observable<T>{
    return this.http.get<T>(this.apiUrl + url)
  }

  put<T>(url: string, body: any ): Observable<T>{
    return this.http.put<T>(this.apiUrl + url, body)
  }

  delete<T>(url: string): Observable<T>{
    return this.http.delete<T>(this.apiUrl + url)
  }
}
