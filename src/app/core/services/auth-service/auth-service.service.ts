import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { ILoginResponse } from '../../interfaces/login-response.interface';
import { IUser } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {


  login(user: IUser): Observable<ILoginResponse>{
    return this.post<ILoginResponse>('users/login', user).pipe(
      tap((res: ILoginResponse) => localStorage.setItem("Token",res.access_token)),
      tap(() => this.snackBar.open(`Login successfull`, 'Close', {
        duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
      })),
      catchError( e => {
        this.snackBar.open(`User could not be created: Dues to ${e.error.message}`, 'Close', {
          duration: 5000, horizontalPosition: 'right', verticalPosition: 'top'
        })
        return throwError(e)
      })

    )
  }
}
